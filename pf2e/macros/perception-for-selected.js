const tokens=canvas.tokens.controlled.filter((t=>["character","npc","familiar"].includes(t.actor.data.type)));0===tokens.length?ui.notifications.error("You must select at least one npc/pc token"):tokens.map((p=>p.actor)).forEach((actor=>actor.data.data.attributes.perception.roll(event,["secret"])));