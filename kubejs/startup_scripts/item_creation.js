// Creates basic KubeJS items
StartupEvents.registry('item', event => {
    // Modpack amalgamations
    event.create('food_amalgamation')
        .displayName('Food Amalgamation')
        .texture('kubejs:item/food_amalgamation')
    event.create('magic_amalgamation')
        .displayName('Magic Amalgamation')
        .texture('kubejs:item/magic_amalgamation')
    event.create('tech_amalgamation')
        .displayName('Tech Amalgamation')
        .texture('kubejs:item/tech_amalgamation')

    // Mod amalgamations
    event.create('mekanism_amalgamation')
        .displayName('Mekanism Amalgamation')
        .texture('kubejs:item/mekanism_amalgamation')
    event.create('create_amalgamation')
        .displayName('Create Amalgamation')
        .texture('kubejs:item/create_amalgamation')
    event.create('applied_energistics_amalgamation')
        .displayName('AE2 Amalgamation')
        .texture('kubejs:item/applied_energistics_amalgamation')
});