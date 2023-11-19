<template>
  <section>
    <p v-if="members.length > 0">
      Found {{ members.length }} members with an average age of {{ averageAge }}
    </p>
    <p v-else>Found 0 members</p>

    <ul v-if="members.length > 0">
      <li v-for="member in members" :key="member.id">
        <MemberCard :member="member" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MemberCard from "./MembersCard.vue";
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
