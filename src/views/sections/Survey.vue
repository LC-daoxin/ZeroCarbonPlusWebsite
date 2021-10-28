<template>
  <base-section
    id="Survey"
    space="0"
  >
    <v-container
      fluid
      class="py-0"
    >
      <v-row justify="center">
        <v-col
          class="d-flex justify-center align-center py-15"
          cols="12"
          md="6"
        >
          <v-responsive>
            <base-info-card
              subtitle="Monthly Status"
              title="SURVEY"
              color="grey lighten-4"
            />

            <base-body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit hic, porro numquam ipsum iste, earum adipisci dignissimos sapiente cupiditate veritatis consequatur eaque culpa enim nesciunt esse tempora iusto in?
            </base-body>

            <base-btn>
              <v-icon class="mr-1">
                {{ icon }}
              </v-icon>
              Write
            </base-btn>
          </v-responsive>
        </v-col>

        <v-col
          class="d-flex justify-center align-center"
          cols="12"
          md="3"
        >
          <base-img
            :src="require('@/assets/zcp/survey.png')"
            class="mx-auto"
            data-aos="zoom-in"
            contain
            max-width="70%"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import { mdiNoteEditOutline } from '@mdi/js'
  export default {
    name: 'Survey',

    data: () => ({
      icon: mdiNoteEditOutline,
    }),
  }
</script>
