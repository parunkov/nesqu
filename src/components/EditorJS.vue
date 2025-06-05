<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import EditorJS, { type OutputData } from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
import Code from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import Table from '@editorjs/table'

interface Props {
  modelValue?: OutputData
  placeholder?: string
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Начните писать...',
  readonly: false
})

const emit = defineEmits<{
  'update:modelValue': [value: OutputData]
  'ready': [editor: EditorJS]
  'change': [value: OutputData]
}>()

const editorElement = ref<HTMLElement>()
let editor: EditorJS | null = null

onMounted(async () => {
  if (!editorElement.value) return

  try {
    editor = new EditorJS({
      holder: editorElement.value,
      placeholder: props.placeholder,
      readOnly: props.readonly,
      data: props.modelValue || {
        blocks: []
      },
      tools: {
        header: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          class: Header as any,
          config: {
            placeholder: 'Введите заголовок...',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 2
          }
        },
        paragraph: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          class: Paragraph as any,
          inlineToolbar: true,
          config: {
            placeholder: 'Введите текст...'
          }
        },
        list: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          class: List as any,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        quote: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          class: Quote as any,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Введите цитату...',
            captionPlaceholder: 'Автор цитаты'
          }
        },
        code: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          class: Code as any,
          config: {
            placeholder: 'Введите код...'
          }
        },
        delimiter: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          class: Delimiter as any
        },
        table: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          class: Table as any,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3
          }
        }
      },
      onChange: async () => {
        if (editor) {
          try {
            const outputData = await editor.save()
            emit('update:modelValue', outputData)
            emit('change', outputData)
          } catch (error) {
            console.error('Ошибка сохранения данных редактора:', error)
          }
        }
      }
    })

    await editor.isReady
    emit('ready', editor)
  } catch (error) {
    console.error('Ошибка инициализации Editor.js:', error)
  }
})

// Следим за изменениями modelValue извне
watch(() => props.modelValue, async (newValue) => {
  if (editor && newValue) {
    try {
      await editor.render(newValue)
    } catch (error) {
      console.error('Ошибка рендеринга данных:', error)
    }
  }
}, { deep: true })

onBeforeUnmount(() => {
  if (editor) {
    editor.destroy()
    editor = null
  }
})

// Методы для работы с редактором
const save = async () => {
  if (editor) {
    try {
      return await editor.save()
    } catch (error) {
      console.error('Ошибка сохранения:', error)
      return null
    }
  }
  return null
}

const clear = () => {
  if (editor) {
    editor.clear()
  }
}

const focus = () => {
  if (editor) {
    editor.focus()
  }
}

// Экспортируем методы для использования в родительском компоненте
defineExpose({
  save,
  clear,
  focus,
  editor: () => editor
})
</script>

<template>
  <div class="editor-js-container">
    <div ref="editorElement" class="editor-js"></div>
  </div>
</template>

<style scoped lang="scss">
.editor-js-container {
  border: 1px solid var(--color-gray-300);
  border-radius: 10px;
  min-height: 200px;
  background: var(--color-white);
}

.editor-js {
  padding: 20px;
  min-height: 180px;
}

// Глобальные стили для Editor.js
:deep(.codex-editor) {
  font-family: var(--font-family);
  
  .ce-block__content,
  .ce-toolbar__content {
    max-width: 100%;
  }
  
  .ce-toolbar__plus {
    color: var(--color-primary-700);
  }
  
  .ce-toolbar__settings-btn {
    color: var(--color-primary-700);
  }
  
  .ce-inline-toolbar {
    background: var(--color-white);
    border: 1px solid var(--color-gray-300);
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .ce-popover {
    background: var(--color-white);
    border: 1px solid var(--color-gray-300);
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
  
  .ce-popover-item:hover {
    background: var(--color-gray-100);
  }
  
  .cdx-block {
    padding: 0.4em 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin: 1em 0 0.5em 0;
    line-height: 1.2;
  }
  
  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.17em; }
  h4 { font-size: 1em; }
  h5 { font-size: 0.83em; }
  h6 { font-size: 0.67em; }
  
  p {
    margin: 0.5em 0;
    line-height: 1.6;
  }
  
  .ce-paragraph {
    line-height: 1.6;
  }
  
  .ce-block--selected .ce-block__content {
    background: var(--color-gray-50);
  }
  
  // Стили для различных инструментов
  .cdx-quote {
    border-left: 4px solid var(--color-primary-700);
    margin: 0;
    padding-left: 15px;
    
    &__text {
      font-style: italic;
      font-size: 1.1em;
      margin: 0;
    }
    
    &__caption {
      color: var(--color-gray-600);
      font-size: 0.9em;
      margin-top: 10px;
    }
  }
  
  .cdx-code {
    background: var(--color-gray-100);
    border: 1px solid var(--color-gray-300);
    border-radius: 6px;
    padding: 15px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-gray-800);
  }
  
  .cdx-list {
    &--unordered .cdx-list__item:before {
      content: '•';
      color: var(--color-primary-700);
      font-weight: bold;
      margin-right: 10px;
    }
    
    &--ordered {
      counter-reset: list-counter;
      
      .cdx-list__item {
        counter-increment: list-counter;
        
        &:before {
          content: counter(list-counter) '.';
          color: var(--color-primary-700);
          font-weight: bold;
          margin-right: 10px;
        }
      }
    }
  }
  
  .tc-toolbox {
    --color-border: var(--color-gray-300);
    
    .tc-toolbox__toggler {
      background: var(--color-white);
      border: 1px solid var(--color-gray-300);
      border-radius: 6px;
    }
    
    .tc-toolbox__dropdown {
      background: var(--color-white);
      border: 1px solid var(--color-gray-300);
      border-radius: 6px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }
  }
  
  .cdx-table {
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 10px 0;
      
      td {
        border: 1px solid var(--color-gray-300);
        padding: 8px 12px;
        min-width: 50px;
        background: var(--color-white);
        
        &:focus {
          outline: 2px solid var(--color-primary-700);
          outline-offset: -2px;
        }
      }
    }
  }
  
  .ce-delimiter {
    text-align: center;
    margin: 20px 0;
    
    &:before {
      content: '***';
      font-size: 20px;
      color: var(--color-gray-400);
      letter-spacing: 5px;
    }
  }
}
</style> 