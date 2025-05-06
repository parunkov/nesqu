<template>
  <nav class="side-navigation" aria-label="Main Navigation">
    <div class="nav-content">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/069b5495b782fc7510b317e23b6cff1510334c30?placeholderIfAbsent=true"
        alt="Logo"
        class="logo"
      />
      <div class="nav-links">
        <a href="#" class="nav-link active">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/0e7a1291f9e2b3a0b7af06bfd43ce56c00655625?placeholderIfAbsent=true"
            alt=""
            class="nav-icon"
          />
          <span class="nav-text">Мероприятия</span>
        </a>
        <a href="#" class="nav-link">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/f6f435faf10f3b8dc1c22e6400007afb2898a62f?placeholderIfAbsent=true"
            alt=""
            class="nav-icon"
          />
          <span class="nav-text">Пользователи</span>
        </a>
      </div>
    </div>
    <a href="#" class="user-profile">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/516ae65bb042dbfed1a596302465449be738b131?placeholderIfAbsent=true"
        alt="User avatar"
        class="nav-icon"
      />
      <span class="nav-text">username@...</span>
    </a>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "./_colors.scss";

.side-navigation {
  background-color: $primary-purple;
  min-width: 240px;
  padding: 30px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  color: $bg-white;
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.18px;
  line-height: 1;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 991px) {
    padding: 20px;
    white-space: initial;
  }
}

.nav-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.logo {
  aspect-ratio: 5.49;
  object-fit: contain;
  object-position: center;
  width: 220px;
  max-width: 100%;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-link {
  border-radius: 10px;
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;

  &.active {
    background-color: rgba(108, 27, 140, 1);
  }

  &:hover {
    background-color: rgba(108, 27, 140, 0.8);
  }
}

.nav-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  flex-shrink: 0;
}

.nav-text {
  flex: 1;
}

.user-profile {
  border-radius: 10px;
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: rgba(108, 27, 140, 0.8);
  }
}
</style>
