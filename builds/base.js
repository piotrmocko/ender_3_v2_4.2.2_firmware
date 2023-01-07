module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_v2_4.2.2-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_v2_4.2.2-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            //PLA Preheat Constants
            ["PREHEAT_1_TEMP_HOTEND", 185],
            ["PREHEAT_1_TEMP_BED", 45],
            //Jyers UI by Jacob Myers
            "DWIN_CREALITY_LCD_JYERSUI"
        ],
        disable: [
            "DWIN_CREALITY_LCD",
            "DWIN_LCD_PROUI",
            "DWIN_MARLINUI_PORTRAIT",
            "DWIN_MARLINUI_LANDSCAPE"
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ]
    }
};
