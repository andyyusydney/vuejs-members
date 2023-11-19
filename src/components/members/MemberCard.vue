<template>
  <div>
    <div>
      <div>{{ nameTag }}</div>
      <div>
        <h2>{{ name }}</h2>
        <p>Member for {{ memberDuration }} days</p>
      </div>
    </div>
    <div>
      <p>{{ member.lastMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Member } from "@/services/members";

@Component({
  components: {},
})
export default class MemberCard extends Vue {
  @Prop(Object) private readonly member!: Member;

  get name() {
    return `${this.member.firstName} ${this.member.lastName}`;
  }

  get memberDuration() {
    const timeDifference =
      new Date().getTime() - new Date(this.member.joinedAt).getTime();
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  get nameTag() {
    return `${this.member.firstName[0].toUpperCase()}${this.member.lastName[0].toUpperCase()}`;
  }
}
</script>
