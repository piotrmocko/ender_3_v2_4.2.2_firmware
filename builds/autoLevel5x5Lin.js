module.exports = {
    extends: "builds/baseLin.js",
    include: "builds/features/autoLevel.js",
    meta: {
        stable_name: "ender_3_v2_4.2.2-{{marlin_version}}-auto_level_5x5_lin-{{uid}}",
        nightly_name: "ender_3_v2_4.2.2-{{current_date}}-auto_level_5x5_lin-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5]
        ]
    }
};
