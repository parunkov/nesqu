/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@editorjs/checklist' {
  import { BlockTool } from '@editorjs/editorjs'
  export default class Checklist implements BlockTool {
    constructor(args: any)
    render(): HTMLElement
    save(): any
    static get toolbox(): any
  }
}

declare module '@editorjs/link' {
  import { InlineTool } from '@editorjs/editorjs'
  export default class LinkTool implements InlineTool {
    constructor(args: any)
    render(): HTMLElement
    save(): any
    static get toolbox(): any
  }
}

declare module '@editorjs/embed' {
  import { BlockTool } from '@editorjs/editorjs'
  export default class Embed implements BlockTool {
    constructor(args: any)
    render(): HTMLElement
    save(): any
    static get toolbox(): any
  }
}

declare module '@editorjs/marker' {
  import { InlineTool } from '@editorjs/editorjs'
  export default class Marker implements InlineTool {
    constructor(args: any)
    render(): HTMLElement
    save(): any
    static get toolbox(): any
  }
}

declare module '@editorjs/inline-code' {
  import { InlineTool } from '@editorjs/editorjs'
  export default class InlineCode implements InlineTool {
    constructor(args: any)
    render(): HTMLElement
    save(): any
    static get toolbox(): any
  }
}

export interface EditorJSData {
  time?: number
  blocks: Array<{
    id?: string
    type: string
    data: any
  }>
  version?: string
} 