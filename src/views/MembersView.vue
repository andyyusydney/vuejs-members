<template>
  <main :class="{ 'h-full': !isLoaded }" class="px-4 lg:px-16">
    <section
      v-if="!isLoaded"
      class="flex flex-col h-full items-center justify-center text-base text-center"
    >
      <button
        @click="loadMembersData"
        :disabled="loading"
        class="bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white px-12 py-4 font-semibold rounded-2xl"
      >
        <span>Load Members</span>
      </button>
    </section>

    <members-list v-else :members="members" />
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Member } from "@/services/members";
import MembersList from "@/components/members/MembersList.vue";
import { Action, State } from "vuex-class";

@Component({
  components: {
    MembersList,
  },
})
export default class MembersView extends Vue {
  @State("members") private readonly members!: Member[];
  @Action("loadMembers") private readonly loadMembers!: () => Promise<void>;
  private loading: boolean = false;
  private isLoaded: boolean = false;
  private errorMessage: string = "";

  private async loadMembersData() {
    try {
      this.loading = true;
      await this.loadMembers();
      this.isLoaded = true;
      this.errorMessage = "";
    } catch (error) {
      console.error("Error loading members:", error);
      this.errorMessage = "An error occurred while loading members.";
    } finally {
      this.loading = false;
    }
  }
}
</script>
