<template>
  <apexchart type="donut" :options="options" :series="series || [0, 0, 0, 0, 0, 0, 0, 0]" />
</template>

<script>
import { eventBus } from "@/main";
import { breathingMixin } from "@/mixins";
import { EVENTS, INHALE, FULL, EXHALE, EMPTY, COLORS } from "@/shared/constants";

export default {
  name: "DonutBreath",
  mixins: [breathingMixin],
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
    // console.log('created.breath',this.breath)
    this.options.title.text = this.getCurrentBreath.name;
    eventBus.$on(EVENTS.periodsChanged, () => {
      this.diplay();
    });
  },
  mounted() {
    // console.log('mounted.breath',this.breath)
    // console.log('mounted.getCurrentPeriods',this.getCurrentPeriods)
    this.diplay();
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

