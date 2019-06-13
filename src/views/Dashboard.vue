<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-snackbar
        :bottom="bottom"
        :top="top"
        :left="left"
        :right="right"
        v-model="snackbar"
        color="#9c27b0"
        dark
      >
        <v-icon
          color="white"
          class="mr-3"
        >
          mdi-alert-circle-outline
        </v-icon>
        <div>Um ítem foi atualizado.</div>
        <v-icon
          size="16"
          @click="snackbar = false"
        >
          mdi-close-circle
        </v-icon>
      </v-snackbar>
      <v-flex
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          :value="projects.length"
          color="green"
          icon="mdi-store"
          title="Dispositivos"
          sub-icon="mdi-access-point"
          sub-text="Online"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg6
      >
        <material-stats-card
          color="red"
          icon="mdi-information-outline"
          title="Problemas Encontrados"
          value="."
          sub-icon="mdi-tag"
          sub-text="Status: OK"
        />
      </v-flex>
      <v-flex
        md12
        lg12
      >
        <material-card
          color="info"
          title="Dispositivos"
          text="Ative ou desative dispositivos remotamente"
        >

          <v-data-table
            :headers="headers"
            :items="projects"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td><img
                :src="statusIcon(item)"
                alt=""
                width="45"></td>
              <td>{{ item.name }}</td>
              <td>
                <v-switch
                  v-model="item.isON"
                  color="orange"
                  hide-details
                  @change="toggle(item)"
                />
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { firestore } from '../plugins/firebase'
export default {
  data () {
    return {
      projects: [],
      snackbar: false,
      statusONIcon: './img/lamp-on.svg',
      statusOFFIcon: './img/lamp-ff.svg',
      headers: [
        {
          sortable: false,
          text: 'Status',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Nome',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Switch',
          value: 'state'
        }
      ],
      tabs: 0,
      top: false,
      bottom: true,
      left: false,
      right: true,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  mounted () {
    this.$binding('projects', firestore.collection('projects'))
      .then((projects) => {
        this.projects = projects
        console.log(projects)
      })
  },
  methods: {
    toggle (project) {
      firestore.collection('projects')
        .doc(project['.key'])
        .update({
          isON: project.isON
        })
        .then((item) => {
          this.snackbar = true
        })
    },
    showSnack () {

    },
    statusIcon (project) {
      return project.isON ? './img/lamp-on.svg' : './img/lamp-off.svg'
    }
  }
}
</script>
