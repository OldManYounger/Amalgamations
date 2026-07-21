ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  event.register(
    Commands.literal('dump_ids')
      .requires(source => source.hasPermission(2))
      .executes(ctx => {
        const items = Ingredient.all.itemIds.sort()
        const blocks = Block.getBlockIds().sort()

        console.log('===== ITEM IDS =====')
        items.forEach(id => console.log(id))

        console.log('===== BLOCK IDS =====')
        blocks.forEach(id => console.log(id))

        ctx.source.sendSuccess(() => Text.literal('Dumped item/block IDs to latest.log'), false)
        return 1
      })
  )
})