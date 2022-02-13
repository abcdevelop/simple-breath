<template>
  <apexchart type="donut" :options="options" :series="series || [0, 0, 0, 0, 0, 0, 0, 0]" />
</template>

<script>
import { mapGetters } from "vuex";
import { BREATHING } from "@/shared/constants";
import { eventBus } from "@/main";
import { EVENTS, INHALE, FULL, EXHALE, EMPTY, COLORS } from "@/shared/constants";

export default {
  name: "DonutBreath",
  data() {
    return {
      series: [0, 100],
      options: {
        title: {
          text: "",
        },
        fill: {
          type: "gradient",
          colors: [
            COLORS.donut.background,
            COLORS.donut.inhale,
            COLORS.donut.background,
            COLORS.donut.full,
            COLORS.donut.background,
            COLORS.donut.exhale,
            COLORS.donut.background,
            COLORS.donut.empty,
          ],
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            customScale: 1,
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: false,
                  show: false,
                },
              },
            },
          },
        },
      },
    };
  },
  created() {
    this.options.title.text = this.getCurrentBreath.name;
    eventBus.$on(EVENTS.periodsChanged, () => {
      this.diplay();
    });
  },
  mounted() {
    this.diplay();
  },
    computed: {
    ...mapGetters({
      getCurrentBreath: BREATHING.getCurrentBreath,
      getCurrentPeriods: BREATHING.getCurrentPeriods,
    }),
  },
  methods: {
    diplay() {
      const periods = this.getCurrentPeriods;
      this.series = [
        periods[INHALE].value,
        periods[INHALE].max - periods[INHALE].value,
        periods[FULL].value,
        periods[FULL].max - periods[FULL].value,
        periods[EXHALE].value,
        periods[EXHALE].max - periods[EXHALE].value,
        periods[EMPTY].value,
        periods[EMPTY].max - periods[EMPTY].value,
      ];
    },
  },
};
</script>

