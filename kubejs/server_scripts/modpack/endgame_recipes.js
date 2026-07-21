// Pack-level amalgamations
ServerEvents.recipes(events => {
  // Food amalgamation
  events.shaped('kubejs:food_amalgamation', ['ABC', 'DEF', 'GHI'], {
    A: 'create_confectionery:ruby_chocolate_candy_3',
    B: 'twilightdelight:meef_wellington_block',
    C: 'mynethersdelight:breakfast_sampler',
    D: 'create_bic_bit:wrapped_mayonnaise_ketchup_topped_fries',
    E: 'expandeddelight:asparagus_mushroom_pasta',
    F: 'ends_delight:assorted_salad',
    G: 'moredelight:loaded_hamburger',
	  H: 'farmersdelight:pasta_with_meatballs',
    I: 'oceansdelight:cabbage_wrapped_elder_guardian'
  })

  // // Magic amalgamation
  // events.shaped('kubejs:magic_amalgamation', ['ABC', 'DEF', 'GHI'], {
  //   A: 'apothic_enchanting:occult_ender_lead',
  //   B: 'malum:belt_of_the_limitless',
  //   C: 'irons_spellbooks:cinderous_soulcaller',
  //   D: 'productivetrees:water_wonder_sapling',
  //   E: 'minecraft:nether_star',
  //   F: 'reliquary:destruction_catalyst',
  //   G: 'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:chaos"}]',
	//   H: 'minecraft:nether_star',
  //   I: 'minecraft:nether_star'
  // })

  // Tech amalgamation
  events.shaped('kubejs:tech_amalgamation', ['ABC', 'DEF', 'GHI'], {
    A: 'ironfurnaces:million_furnace',
    B: 'dndesires:gatling_breaker',
    C: 'advanced_ae:quantum_multi_threader',
    D: 'immersiveengineering:railgun',
    E: 'draconicevolution:chaotic_staff',
    F: 'pneumaticcraft:minigun',
    G: 'ae2:singularity',
	  H: 'mekmm:wireless_transmission_station',
    I: 'avaritia:infinity_singularity'
  })
})

// Mod-level amalgamations
ServerEvents.recipes(event => {
  // Mekanism (and addons) amalgamation
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'ABCCCCCBA',
      'BDDEFEDDB',
      'CDEFGFEDC',
      'CEFHIHFEC',
      'CFGJLKGFC',
      'CEFHIHFEC',
      'CDEFGFEDC',
      'BDDEFEDDB',
      'ABCCCCCBA'
    ],
    key: {
      A: {item: 'mekanism:block_refined_obsidian'},
      B: {item: 'mekanism:pellet_antimatter'},
      C: {item: 'mekanism:ingot_refined_obsidian'},
      D: {item: 'mekanism:alloy_atomic'},
      E: {item: 'mekanism:reprocessed_fissile_fragment'},
      F: {item: 'mekanism:ultimate_control_circuit'},
      G: {item: 'mekanism:ultimate_universal_cable'},
      H: {item: 'mekanism:ultimate_logistical_transporter'},
      I: {item: 'mekmm:uu_matter'},
      J: {item: 'mekanism:module_gravitational_modulating_unit'},
      K: {item: 'mekanism:module_elytra_unit'},
      L: {item: 'mekmm:modeler_doll'}
    },
    result: {
      id: 'kubejs:mekanism_amalgamation'
    }
  })

  // Create (and addons) amalgamation
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'ABBBBBBBA',
      'BCDDCDDCB',
      'BDEFGFEDB',
      'BDHHIHHDB',
      'BCJIKIJCB',
      'BDHHIHHDB',
      'BDEFGFEDB',
      'BCDDCDDCB',
      'ABBBBBBBA'
    ],
    key: {
      A: {item: 'create:railway_casing'},
      B: {item: 'createteleporters:quantum_casing'},
      C: {item: 'create:precision_mechanism'},
      D: {item: 'create:sturdy_sheet'},
      E: {item: 'create:crushing_wheel'},
      F: {item: 'create:stock_ticker'},
      G: {item: 'createteleporters:teleporter'},
      H: {item: 'create:blaze_cake'},
      I: {item: 'createteleporters:quantum_mechanism'},
      J: {item: 'create:mechanical_arm'},
      K: {item: 'create:wand_of_symmetry'}
    },
    result: {
      id: 'kubejs:create_amalgamation'
    }
  })

  // AE2 (and addons) amalgamation
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: [
      'AABBBBBAA',
      'ACCCCCCCA',
      'BCDEFEDCB',
      'BCEGHGECB',
      'BCFHIHFCB',
      'BCEGHGECB',
      'BCDEFEDCB',
      'ACCCCCCCA',
      'AABBBBBAA'
    ],
    key: {
      A: {item: 'ae2:quartz_bricks'},
      B: {item: 'advanced_ae:quantum_structure'},
      C: {item: 'advanced_ae:quantum_alloy'},
      D: {item: 'advanced_ae:quantum_storage_256'},
      E: {item: 'megacells:256m_crafting_storage'},
      F: {item: 'extendedae:crystal_assembler'},
      G: {item: 'advanced_ae:quantum_crafter'},
      H: {item: 'advanced_ae:quantum_core'},
      I: {item: 'advanced_ae:data_entangler'}
    },
    result: {
      id: 'kubejs:applied_energistics_amalgamation'
    }
  })
})