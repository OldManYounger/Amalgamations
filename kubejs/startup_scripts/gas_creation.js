StartupEvents.registry('mekanism:chemical', event => {
  // kubejs:test_gas, treated as a gas-like chemical
  event.create('test_gas')
    .displayName('Test Gas')
    .tint(0xA020F0)  // uses KubeChemicalBuilder.tint(KubeColor)
    .texture('kubejs:fluid/molten_stellarium')
    .gaseous();      // tag as gaseous (MekanismAPITags.Chemicals.GASEOUS)
})