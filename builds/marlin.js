module.exports = {
    board_env: "STM32F103RE_creality",
    meta: {
        stable_name: "ender_3_v2_4.2.2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_v2_4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 V2/CrealityV422/MarlinUI",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
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
            "LCD_BED_LEVELING",
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
