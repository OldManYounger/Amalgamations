// Remove invalid Cataclysm entries from tags to stop LMFT/KubeJS tag-load errors
ServerEvents.tags('entity_type', event => {
  event.remove('minecraft:impact_projectiles', 'cataclysm:star_lance')
})

ServerEvents.tags('damage_type', event => {
  event.remove('minecraft:panic_causes', 'cataclysm:dagger')
})

// Remove invalid Relics entries from item tags to stop LMFT/KubeJS tag-load errors
ServerEvents.tags('item', event => {
  const brokenRelicsTagEntries = [
    'relics:midnight_robe',
    'relics:elytra_booster',
    'relics:drowned_belt',
    'relics:hunter_belt',
    'relics:leather_belt',
    'relics:spore_sack',
    'relics:shadow_glaive',
    'relics:magma_walker',
    'relics:aqua_walker',
    'relics:ice_skates',
    'relics:ice_breaker',
    'relics:roller_skates',
    'relics:amphibian_boot',
    'relics:phantom_boot',
    'relics:rage_glove',
    'relics:enders_hand',
    'relics:wool_mitten',
    'relics:reflection_necklace',
    'relics:holy_locket',
    'relics:chorus_inhibitor',
    'relics:bastion_ring',
    'relics:infinity_ham',
    'relics:magic_mirror',
    'relics:space_dissector'
  ]

  for (const id of brokenRelicsTagEntries) {
    event.remove('relics:relic', id)
  }

  event.remove('werewolves:werewolf_food', 'relics:infinity_ham')
})

// Remove invalid Garnished entries from tags to stop LMFT/KubeJS tag-load errors
ServerEvents.tags('block', event => {
  event.remove('garnished:april_foods/smooth_blocks', 'garnished:smooth_wyvern_stone')
})

ServerEvents.tags('item', event => {
  event.remove('garnished:april_foods/smooth_blocks', 'garnished:smooth_wyvern_stone')
})

// Remove invalid MaFgLib/Malilib nested tag reference to stop LMFT/KubeJS tag-load errors
ServerEvents.tags('block', event => {
  event.remove('malilib:needs_silk_touch', '#malilib:glass_panes')
})

// Remove invalid Integrated Dungeons and Structures byg tags
ServerEvents.tags('worldgen/biome', event => {
  // BYG biomes
  event.remove('idas:has_structure/byg_redwood_biomes', 'byg:redwood_thicket')
  event.remove('idas:has_structure/bygmohogany_biomes', 'byg:tropical_rainforest')

  // BOP biomes
  event.remove('idas:has_structure/bopmohogany_biomes', 'biomesoplenty:rainforest')
  event.remove('idas:has_structure/bopredwood_biomes', 'biomesoplenty:redwood_forest')
})