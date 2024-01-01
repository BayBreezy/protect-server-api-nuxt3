<template>
  <div>
    <UiContainer as="section" class="max-w-4xl py-5">
      <div class="flex items-center justify-between gap-5">
        <div>
          <h1 class="text-2xl font-semibold">Users</h1>
          <p class="mt-1 text-muted-foreground">Manage users here</p>
        </div>
        <UiButton @click="loadData" size="sm">Load users</UiButton>
      </div>
      <UiDivider class="my-10" />
      <!-- Show if no users loaded -->
      <div v-if="!users.length" class="flex flex-col items-center gap-5">
        <Icon size="28" class="text-muted-foreground" name="lucide:users" />
        <p>No users loaded</p>
      </div>
      <!-- Show when users are loaded -->
      <div v-else class="overflow-x-auto rounded-lg border bg-background">
        <UiTable>
          <UiTableHeader>
            <UiTableRow>
              <UiTableHead v-for="h in headers">{{ h }}</UiTableHead>
            </UiTableRow>
          </UiTableHeader>

          <UiTableBody>
            <UiTableRow v-for="user in users" :key="user.id">
              <UiTableCell>{{ user.id }}</UiTableCell>
              <UiTableCell>
                <div class="flex items-center gap-3">
                  <UiAvatar :src="user.avatar" :alt="user.name" />
                  <span>{{ user.name }}</span>
                </div>
              </UiTableCell>
              <UiTableCell>
                <a
                  class="text-muted-foreground underline decoration-sky-400 underline-offset-2 transition hover:text-sky-500"
                  :href="`mailto:${user.email}`"
                  >{{ user.email }}</a
                >
              </UiTableCell>
            </UiTableRow>
          </UiTableBody>
        </UiTable>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
  const { users } = storeToRefs(useUsersStore());
  const { loadData } = useUsersStore();
  const headers = ["ID", "Name", "Email"];

  useHead({
    title: "Users",
    meta: [
      {
        name: "description",
        content: "Manage users here",
      },
    ],
  });
</script>
