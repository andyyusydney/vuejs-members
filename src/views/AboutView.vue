<template>
  <div class="mx-4 my-8 lg:m-16">
    <p class="text-2xl font-semibold">About My Project</p>

    <p class="mt-4">
      The current project utilizes Vue 2, Vue Class Component, and Vue Property
      Decorator, as specified in README.md. I have developed the code to align
      with the existing tech stack, using the same library versions as those
      found in the provided codebase.
    </p>
    <br />
    <ul class="list-disc pl-6">
      <li>
        <h3 class="text-lg font-semibold">
          What you added/changed and the rationale behind it?
        </h3>
        <ul class="list-disc pl-6">
          <li>
            <h4 class="font-semibold">
              Did you use the Vuex store following standard practices and
              clearly explain the rationale behind any additions/changes you
              made?
            </h4>
            <ul class="list-disc pl-6">
              <li>
                In Vuex store instance, I defined a "setMembers" handler
                function in mutations to update the value of the "members"
                defined in the state.
              </li>
              <li>
                At the same time, I defined a "loadMembers" action to load
                members from "MembersService" and then commit the "setMembers"
                mutation.
              </li>
              <li>
                In the "MembersView" component, I used the
                "@Action("loadMembers")" decorator to connect the Vuex store's
                action of "loadMembers" with the component method called
                "loadMembers".
              </li>
              <li>
                When the user clicks the "Load Members" button, it calls
                "this.loadMembers()", and then it triggers the action of
                "loadMembers".
              </li>
              <li>
                In the component, I alos have the "@State("members")" decorator
                to bind the "members" property in the component with the members
                state in the store.
              </li>
              <li>
                Once the state of "members" in the store is updated, the
                "members" property in the component gets updated automatically.
              </li>
            </ul>
          </li>
        </ul>
        <ul class="list-disc pl-6">
          <li>
            <h4 class="font-semibold">
              Did you clearly explain the rationale behind each new component
              you introduce and how you compose them?
            </h4>
            <p>
              There are three new components that have been created for the UI
              of the members' view
            </p>
            <ul class="list-disc pl-6">
              <li>
                <h4 class="font-semibold">MembersView.vue</h4>
                <p>
                  It handles the overall view structure and the logic for
                  displaying either the "Load Members" button or the members'
                  list. It does not handle the UI logic for the members' list
                  component.
                </p>
              </li>
              <li>
                <h4 class="font-semibold">MembersList.vue</h4>
                <p>
                  It focuses on the logic of rendering the list of members while
                  delegating the display logic of member details to the
                  "MemberCard" component.
                </p>
              </li>
              <li>
                <h4 class="font-semibold">MemberCard.vue</h4>
                <p>
                  It is responsible for the UI structure of each member card,
                  encapsulating the UI logic of member detail to make it
                  reusable.
                </p>
              </li>
            </ul>
            <p>
              By structuring the components in this way, each component is
              responsible for a specific aspect of the UI, making it easier to
              understand, test, and maintain.
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <br />

    <ul class="list-disc pl-6">
      <li>
        <h3 class="text-lg font-semibold">
          Any improvements you would suggest to either the UX workflow, the UI
          design, or the code?
        </h3>
        <ul class="list-disc pl-6">
          <li>
            <h4 class="font-semibold">Message Display for Empty Member List</h4>
            <p>
              Added functionality to display the message "Found 0 members" if
              the member service returns an empty members list, which is missing
              in the design.
            </p>
          </li>
          <li>
            <h4 class="font-semibold">Button Interaction</h4>
            <p>
              Disabled the "Load Members" button after a click to prevent
              multiple requests from being triggered, enhancing user experience
              and avoiding potential issues.
            </p>
          </li>
          <li>
            <h4 class="font-semibold">Loading State for Button</h4>
            <p>
              Suggested improvement: Implement a loading state for the "Load
              Members" button to visually indicate to users that content is
              being loaded, such as displaying a spinner.
            </p>
          </li>
          <li>
            <h4 class="font-semibold">Handling Long Customer Names</h4>
            <p>
              There is a layout issue where a long customer's name could break
              the member card layout on smaller screens, so I have truncated it
              to a single line.
            </p>
          </li>
          <li>
            <h4 class="font-semibold">Responsive Design for Screen Sizes</h4>
            <p>
              Suggested improvement: There is a missing responsive design
              element for screen sizes between 640px and 768px, where the
              content of the member card becomes squished.
            </p>
          </li>
          <li>
            <h4 class="font-semibold">Ordering Tailwind Classes</h4>
            <p>
              The tailwind classes in the code I developed are not sorted in
              order. It is necessary to arrange them in a logical order for
              better readability and maintainability.
            </p>
          </li>
          <li>
            <h4 class="font-semibold">Unit Testing</h4>
            <p>
              The unit testing has not been implemented due to time constraints.
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <br />
    <ul class="list-disc pl-6">
      <li>
        <h3 class="text-lg font-semibold">
          Any assumptions you had to make because information was missing?
        </h3>
        <ul class="list-disc pl-6">
          <li>Displaying an error message in case of a request error.</li>
          <li>Displaying a not found message if no members are found.</li>
          <li>
            Assuming that the font in the design is intended to be "Inter"
            although it was set to "Avenir"
          </li>
        </ul>
      </li>
    </ul>
    <br />
    <ul class="list-disc pl-6">
      <li>
        <h3 class="text-lg font-semibold">
          Any roadblocks or issues you encountered?
        </h3>
        <p>N/A</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";

@Component({
  components: {},
})
export default class AboutView extends Vue {}
</script>
