// Main crafting event
ServerEvents.recipes(events => {

    // Potion
    events.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:sweet_berries"
            },
            {
                "type": "fluid_stack",
                "amount": 200,
                "fluid": "minecraft:lava"
            }
        ],
        "results": [
            {
                "item": {
                    "id": "minecraft:potion"
                }
            }
        ]
    }),

    // Lava
    events.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:carrot"
            }
        ],
        "results": [
            {
                "amount": 200,
                "id": "minecraft:lava"
            }
        ]
    }),
    
    // Chocolate
    events.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:cobblestone"
            },
            {
                "item": "minecraft:cocoa_beans"
            },
            {
                "type": "fluid_tag",
                "amount": 250,
                "fluid_tag": "c:milk"
            }
        ],
        "results": [
            {
                "amount": 250,
                "id": "create:chocolate"
            }
        ]
    }),

    // Mud
    events.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "type": "neoforge:block_tag",
            "tag": "minecraft:convertable_to_mud"
            },
            {
            "type": "fluid_stack",
            "amount": 250,
            "fluid": "minecraft:lava"
            }
        ],
        "results": [
            {
            "item": {
                "id": "minecraft:mud"
            }
            }
        ]
    }),

    // Cobblestone
    events.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "minecraft:mud"
            }
        ],
        "processing_time": 300,
        "results": [
            {
            "id": "minecraft:coal"
            },
            {
            "chance": 0.75,
            "id": "minecraft:coal"
            },
            {
            "chance": 0.75,
            "id": "create:experience_nugget"
            },
            {
            "chance": 0.125,
            "id": "minecraft:cobblestone"
            }
        ]
    })

    // Blaze Rod
    events.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": "minecraft:blaze_powder"
            },
            {
            "type": "fluid_stack",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
            "id": "minecraft:blaze_rod"
            }
        ]
    })
})