<template>
  <section>
    <div class="text-lg font-semibold mt-8 mb-4">
      <p v-if="members.length > 0">
        Found {{ members.length }} members with an average age of
        {{ averageAge }}
      </p>
      <p v-else>Found 0 members</p>
    </div>

    <ul
      v-if="members.length > 0"
      class="grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4"
    >
      <li v-for="member in members" :key="member.id" class="last:mb-4">
        <MemberCard :member="member" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MemberCard from "./MemberCard.vue";
import { Member } from "@/services/members";

@Component({
  components: {
    MemberCard,
  },
})
export default class MembersList extends Vue {
  @Prop(Array) private readonly members!: Member[];

  get averageAge() {
    return this.members.length > 0
      ? Math.floor(
          this.members.reduce((pre, cur) => pre + cur.age, 0) /
            this.members.length
        )
      : 0;
  }
}
</script>
