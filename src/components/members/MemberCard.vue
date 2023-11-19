<template>
  <article
    class="w-full p-6 text-gray-800 bg-white border border-neutral-100 rounded-2xl shadow-[0px_4px_4px_0px_#00000040]"
  >
    <section class="flex mb-4">
      <div
        :style="{ backgroundColor: nameTagColor }"
        class="w-16 h-16 min-w-64 text-2xl rounded-full bg-blue-500 flex items-center justify-center mr-6"
      >
        {{ nameTag }}
      </div>
      <header>
        <h2 class="text-xl line-clamp-1">{{ name }}</h2>
        <p class="text-sm line-clamp-1">Member for {{ memberDuration }} days</p>
      </header>
    </section>
    <section class="text-base line-clamp-2">
      <p>{{ member.lastMessage }}</p>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Member } from "@/services/members";
import { mapInitialsToHexColour } from "@/utils/colours";
import { getDaysDifference, getNameInitials } from "@/utils/utils";

@Component({
  components: {},
})
export default class MemberCard extends Vue {
  @Prop(Object) private readonly member!: Member;

  get name() {
    return `${this.member.firstName} ${this.member.lastName}`;
  }

  get memberDuration() {
    return getDaysDifference(new Date(), new Date(this.member.joinedAt));
  }

  get nameTag() {
    return `${this.member.firstName[0].toUpperCase()}${this.member.lastName[0].toUpperCase()}`;
  }

  get nameTagColor() {
    return mapInitialsToHexColour(
      getNameInitials(this.member.firstName, this.member.lastName)
    );
  }
}
</script>
