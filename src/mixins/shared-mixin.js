import { mapGetters, mapActions } from "vuex";
import { SHARED } from "@/shared/constants";

export const sharedMixin = {
    // data: () => ({
    //     SHARED
    // }),
    computed: {
        ...mapGetters({
            getLanguageCode: SHARED.getLanguageCode,
            getTraduction: SHARED.getTraduction,
            getStatusText: SHARED.getStatusText,
        })
    },
    methods: {
        ...mapActions({
            setLanguageCode: SHARED.setLanguageCode,
            setStatusText: SHARED.setStatusText,
        }),
        showMessage(msg) {
            this.msg = msg;
            this.alertMsg = true;
            setTimeout(() => {
                this.msg = "";
                this.alertMsg = false;
            }, 3000);
        }
    }
}
