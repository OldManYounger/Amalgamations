StartupEvents.registry('fluid', event => {

    // Create a new fluid (use 'thin' or 'thick' for water/lava-style rendering)
    const fluid = event.create('protein_shake', 'thin')

        // === BASIC PROPERTIES ===
        .displayName('Protein Shake')             // Display name in tooltips
        .tint(0xFFFFFF)
        // .rarity('rare')                           // Tooltip rarity: common, uncommon, rare, epic

        // === TEXTURES ===
        //.builtinTextures()                       // Use built-in default textures (no custom)
        //.thinTexture(0xFF6F61)                   // Auto-tinted "water"-like texture
        //.thickTexture(0xFF6F61)                  // Auto-tinted "lava"-like texture
        .stillTexture('kubejs:fluid/protein_shake_still')  // Custom still texture
        .flowingTexture('kubejs:fluid/protein_shake_flow') // Custom flowing texture

        // === BUCKET / BLOCK BEHAVIOR ===
        //.noBucket()                              // Do not generate bucket item
        //.noBlock()                               // Do not generate a placeable block
        //.bucketColor(0xFF6F61)                   // Tint inside bucket
        //.bucketItemGroup('kubejs')               // Assign bucket to creative tab (if exposed)

        // === ADVANCED OPTIONS ===
        //.tag('forge:protein_fluids')             // Add to Forge fluid tag
        //.translationKey('fluid.kubejs.protein_shake')  // Custom translation key
        //.tooltip('High in gains!')               // Add a tooltip to the fluid bucket
        //.luminosity(10)                          // Glow level (0–15, some versions only)
        //.density(1500)                           // Density (affects physics)
        //.viscosity(3000)                         // Viscosity (flow speed)
        //.temperature(310)                        // Temperature in Kelvin
        //.gaseous(false)                          // Whether it behaves like a gas
        //.overlayTexture('kubejs:block/fluids/foam_overlay') // Overlay (some builds only)
        //.customTexture('kubejs:block/fluids/protein_special') // Optional variant alias
})

StartupEvents.registry('fluid', event => {

    const fluid = event.create('molten_universe', 'thick')

        // === BASIC PROPERTIES ===
        .displayName('Molten Universe')             // Display name in tooltips
        .tint(0xFFFFFF)
        // .rarity('rare')                           // Tooltip rarity: common, uncommon, rare, epic

        // === TEXTURES ===
        //.builtinTextures()                       // Use built-in default textures (no custom)
        //.thinTexture(0xFF6F61)                   // Auto-tinted "water"-like texture
        //.thickTexture(0xFF6F61)                  // Auto-tinted "lava"-like texture
        .stillTexture('kubejs:fluid/molten_universe')  // Custom still texture
        .flowingTexture('kubejs:fluid/molten_universe') // Custom flowing texture

        // === BUCKET / BLOCK BEHAVIOR ===
        //.noBucket()                              // Do not generate bucket item
        //.noBlock()                               // Do not generate a placeable block
        //.bucketColor(0xFF6F61)                   // Tint inside bucket
        //.bucketItemGroup('kubejs')               // Assign bucket to creative tab (if exposed)

        // === ADVANCED OPTIONS ===
        //.tag('forge:protein_fluids')             // Add to Forge fluid tag
        //.translationKey('fluid.kubejs.protein_shake')  // Custom translation key
        //.tooltip('High in gains!')               // Add a tooltip to the fluid bucket
        //.luminosity(10)                          // Glow level (0–15, some versions only)
        //.density(1500)                           // Density (affects physics)
        //.viscosity(3000)                         // Viscosity (flow speed)
        //.temperature(310)                        // Temperature in Kelvin
        //.gaseous(false)                          // Whether it behaves like a gas
        //.overlayTexture('kubejs:block/fluids/foam_overlay') // Overlay (some builds only)
        //.customTexture('kubejs:block/fluids/protein_special') // Optional variant alias
})

StartupEvents.registry('fluid', event => {

    const fluid = event.create('molten_stellarium', 'thick')

        // === BASIC PROPERTIES ===
        .displayName('Molten Stellarium')             // Display name in tooltips
        .tint(0xFFFFFF)
        // .rarity('rare')                           // Tooltip rarity: common, uncommon, rare, epic

        // === TEXTURES ===
        //.builtinTextures()                       // Use built-in default textures (no custom)
        //.thinTexture(0xFF6F61)                   // Auto-tinted "water"-like texture
        //.thickTexture(0xFF6F61)                  // Auto-tinted "lava"-like texture
        .stillTexture('kubejs:fluid/molten_stellarium')  // Custom still texture
        .flowingTexture('kubejs:fluid/molten_stellarium') // Custom flowing texture

        // === BUCKET / BLOCK BEHAVIOR ===
        //.noBucket()                              // Do not generate bucket item
        //.noBlock()                               // Do not generate a placeable block
        //.bucketColor(0xFF6F61)                   // Tint inside bucket
        //.bucketItemGroup('kubejs')               // Assign bucket to creative tab (if exposed)

        // === ADVANCED OPTIONS ===
        //.tag('forge:protein_fluids')             // Add to Forge fluid tag
        //.translationKey('fluid.kubejs.protein_shake')  // Custom translation key
        //.tooltip('High in gains!')               // Add a tooltip to the fluid bucket
        //.luminosity(10)                          // Glow level (0–15, some versions only)
        //.density(1500)                           // Density (affects physics)
        //.viscosity(3000)                         // Viscosity (flow speed)
        //.temperature(310)                        // Temperature in Kelvin
        //.gaseous(false)                          // Whether it behaves like a gas
        //.overlayTexture('kubejs:block/fluids/foam_overlay') // Overlay (some builds only)
        //.customTexture('kubejs:block/fluids/protein_special') // Optional variant alias
})

StartupEvents.registry('fluid', event => {

    const fluid = event.create('molten_pasta', 'thin')

        // === BASIC PROPERTIES ===
        .displayName('Molten Pasta')             // Display name in tooltips
        .tint(0xFFFFFF)
        // .rarity('rare')                           // Tooltip rarity: common, uncommon, rare, epic

        // === TEXTURES ===
        //.builtinTextures()                       // Use built-in default textures (no custom)
        //.thinTexture(0xFF6F61)                   // Auto-tinted "water"-like texture
        //.thickTexture(0xFF6F61)                  // Auto-tinted "lava"-like texture
        .stillTexture('kubejs:fluid/molten_pasta')  // Custom still texture
        .flowingTexture('kubejs:fluid/molten_pasta') // Custom flowing texture

        // === BUCKET / BLOCK BEHAVIOR ===
        //.noBucket()                             // Do not generate bucket item
        //.noBlock()                               // Do not generate a placeable block
        //.bucketColor(0xFF6F61)                   // Tint inside bucket
        //.bucketItemGroup('kubejs')               // Assign bucket to creative tab (if exposed)

        // === ADVANCED OPTIONS ===
        //.tag('forge:protein_fluids')             // Add to Forge fluid tag
        //.translationKey('fluid.kubejs.protein_shake')  // Custom translation key
        //.tooltip('High in gains!')               // Add a tooltip to the fluid bucket
        //.luminosity(10)                          // Glow level (0–15, some versions only)
        //.density(1500)                           // Density (affects physics)
        //.viscosity(3000)                         // Viscosity (flow speed)
        //.temperature(310)                        // Temperature in Kelvin
        //.gaseous(false)                          // Whether it behaves like a gas
        //.overlayTexture('kubejs:block/fluids/foam_overlay') // Overlay (some builds only)
        //.customTexture('kubejs:block/fluids/protein_special') // Optional variant alias
})