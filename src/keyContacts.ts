/*
  This is a list of players in the Enron dataset.  

  See README for list of these people, their roles, etc.
*/

export interface EmailSent {
  id: string
  to: string[]
  sent: Date
}

export interface EmailReceived {
  id: string
  from: string
  sent: Date
}

export interface Contact {
  name: string
  aliases: string[]
  title: string
  color: string
  senderTotal: number
  receiverTotal: number
  asSender: EmailSent[]
  asReceiver: EmailReceived[]
}

export interface Alias {
  name: string
  aliases: string[]
  title: string
  color: string
}

//  { name: '', aliases: [] },

const aliases: Alias[] = [
  {
    name: 'Shackleton, Sara',
    title: 'VP ENA & Senior Counsel',
    color: '#494949',
    aliases: [
      'sara shackleton',
      'shackleton  sara',
      'sara.shackleton@enron.com',
      'shackleton',
      'sara shackleton/hou/ect@ect',
      'sara shackleton@enron_development',
      'sara shackleton@ect',
      'sara_shackleton@enron.com',
      "'sara shackleton' @enron",
      'sara.shackleton',
      'sara_shackleton.enron.com@dom.com',
      'shackleton sara',
      'shackleton@mailman.enron.com',
      'shackleton  sara (enron)',
      'sara shackleton (e-mail)',
      'sara shackleton @ enron.com',
      'sara.shackleton@db.com',
    ],
  },
  {
    name: 'Galvan, Michael',
    title: '',
    color: '#494949',
    aliases: [
      'michael s galvan',
      'galvan',
      'jgalvan@kpmg.com',
      'galvan',
      'galvan  michael s.',
      'michael.s.galvan@enron.com',
    ],
  },
  {
    name: 'Vargas, Hope',
    title: '',
    color: '#494949',
    aliases: [
      'hope vargas',
      'vargas',
      'vargas  hope',
      'hope.vargas@enron.com',
      'hope vargas/hou/ect@ect',
      'hope vargas/enron@enronxgate@enron',
    ],
  },
  {
    name: 'Schwertner, Brian',
    title: '',
    color: '#494949',
    aliases: [
      'brian schwertner',
      'schwertner',
      'schwertner  brian',
      'brian schwertner/na/enron@enron',
    ],
  },
  {
    name: 'Cook, Mary',
    title: '',
    color: '#494949',
    aliases: ['Mary Cook', 'Cook'],
  },
  {
    name: 'Mellencamp, Lisa',
    title: '',
    color: '#494949',
    aliases: [
      'lisa mellencamp',
      'mellencamp',
      'mellencamp  lisa',
      'lisa.mellencamp@enron.com',
      'lmellencamp@enron.com',
      'mellencamp lisa',
      'lisa mellencamp/hou/ect@ect',
    ],
  },
  {
    name: 'Cash, Michelle',
    title: 'Assistant General Counsel',
    color: '#494949',
    aliases: [
      'Cash Michelle',
      'Cash',
      'Michelle Cash',
      'michelle cash/hou/ect@ect',
      'michelle.cash@enron.com',
      'mcash@enron.com',
      'michelle cash (e-mail)',
      'mcash@ect.enron.com',
      'cash michelle (e-mail)',
      'cash  michelle',
      'cash@mailman.enron.com',
      'cash michelle (e-mail)',
    ],
  },
  {
    name: 'Buy, Richard',
    title: 'Chief Risk Officer',
    color: '#494949',
    aliases: [
      'Buy, Rick',
      'Buy Rick',
      'rick buy- enron corp. chief risk officer@enron',
      'rick buy- enron corp. chief risk officer@enron',
      'rick buy and mark haedicke',
      'rick buy and mark haedicke@enron',
      'buy  rick',
      'imceanotes-+3corderdetails+40buy+2ecom+3e+40enron@enron.com',
      'rick buy',
      'rick buy@ect',
      'buy',
      'rick.buy@enron.com',
      'rick buy/hou/ect@enron',
      'rbuy@enron.com',
      'rbuy@ect.enron.com',
      'richard buy',
      'richard b. buy (e-mail)',
      'rick buy (ene) (e-mail)',
      'richard b. buy  pe',
      'buy  richard',
      'richard b buy',
    ],
  },
  {
    name: 'Fleming, Rosalee',
    title: '',
    color: '#494949',
    aliases: [
      'Rosalee Fleming',
      'rosalee.fleming@enron.com',
      'rosalee fleming@enron',
      'rfleming@enron.com',
      'fleming  rosalee',
      'fleming',
      'roslee.fleming@enron.com',
    ],
  },
  {
    name: 'Watkins, Sherron',
    title: '',
    color: '#494949',
    aliases: [
      'Sherron Watkins',
      'sherron',
      'Watkins Sherron',
      'watkins  sherron',
      'sherron_watkins@enron.net',
      'watkins',
    ],
  },
  {
    name: 'Baxter, Cliff',
    title: '',
    color: '#494949',
    aliases: [
      'cliff baxter',
      'cbaxter@enron.com',
      'Baxter@ect, Cliff',
      'Cliff, Baxter',
      'cliff baxter@ect',
      'baxter  cliff  aep',
      'baxter  cliff',
      'baxter',
      'cliff baxter/hou/ect@enron',
    ],
  },
  {
    name: 'Belden, Tim',
    title: '',
    color: '#494949',
    aliases: [
      'belden',
      'belden  tim',
      'tim.belden@enron.com',
      'tim belden',
      'tim belden/hou/ect@ect',
      'tim.belden@enron.com tim.belden@enron.com@enron',
      'imceanotes-+22tim+2ebelden+40enron+2ecom+22+20+3ctim+2ebelden+40enron+2ecom+3e+40enron@enron.com',
      'tim belden@ect',
      'tim belden tbelden@nwlink.com@enron',
      'tim belden/enron@enronxgate@enron',
      'timothy belden (e-mail)',
      'tim belden (e-mail 2)',
    ],
  },
  {
    name: 'Causey, Richard',
    title: '',
    color: '#494949',
    aliases: [
      'richard causey@enron',
      'richard causey',
      'causey',
      'Causey@enron, Richard',
      'Richard, Causey',
      'causey  richard',
      "'causey,'",
      'richard.causey@enron.com',
      "'causey",
      'rick causey@enron',
      'richard causey/corp/enron@enron',
      'rcausey@enron.com',
    ],
  },
  {
    name: 'Dasovich, Jeff',
    title: '',
    color: '#494949',
    aliases: [
      'jdasovic@ees.enron.com',
      'jdasovi@ect.enron.com',
      'dasovichd@home.com',
      'jdasovic',
      'jeff dasovich/sfo/ees@enron',
      'jeff dasovich  enron sf',
      'dasovich63@hotmail.com',
      'jeff_dasovich@ees.enron.com',
      'dasovich  jeff jeff.dasovich@enron.com@enron',
      'jeff. dasovich@enron. com (e-mail)',
      'jeffrey dasovich',
      'jeff_dasovich@enron.com',
      'dasovich@haas.berkeley.edu',
      'jeff dasovich (e-mail)',
      'jeff.dasovich@enron.com@enron',
      'dasovich',
      'dasovich  jeff',
      'jeff.dasovich@enron.com',
      'jeff dasovich',
      'jeff dasovich/na/enron@enron',
      'jeff.dasovich',
      'jdasovic@enron.com@enron',
      'dasovichd@aol.com',
      "'jeff dasovich enron",
      'jeff dasovich enron sf',
      'jeff dasovich@ees',
      'jdasovi@ect',
      'dasovich@inhale.com',
      'dasovich@wco.com',
      'dasovich.nancy@gene.com',
      'dasovich  jeff (enron)',
      'dasovich@ees',
      'jdasovic@ees.enron.com@ect',
      'mr. jeff dasovich',
      'jdasovic@.enron.com',
      'jeff dasovich@enron',
      'jdasovic%.enron.com@enron.com',
      'jeff dasovich@ees@enron_development',
      'dasovich jeff (e-mail)',
      'jbennett@gmssr.com@smtp@enronxgate',
      "'jeff dasovich",
      'jeffdasovich',
      'dasovich  jeffrey',
      'jdasovic@enron.com',
    ],
  },
  {
    name: 'Fastow, Andrew',
    title: '',
    color: '#494949',
    aliases: [
      'andy fastow',
      'andrew s fastow',
      'Fastow, Andy',
      'Fastow, Andrew S',
      'Andrew, Fastow',
      'fastow  andrew',
      'andrew.fastow@enron.com',
      'andrew s fastow/enron@enronxgate@enron',
      'fastow,',
      'fastow  andrew s.',
      'andrew fastow',
      'andrew.s.fastow@enron.com',
      'fastow',
    ],
  },
  {
    name: 'Frevert, Mark',
    title: '',
    color: '#494949',
    aliases: [
      'frevert  mark',
      'mark frevert@enron',
      'Mark, Frevert',
      'mark frevert',
      'mark.frevert@enron.com',
      'frevert',
      'office of the chairman - enron wholesale services- mark frevert and greg whalley@enron',
      'mark frevert & dave delainey',
      'mark frevert & dave delainey@enron',
      'mark frevert/enron@enronxgate',
    ],
  },
  {
    name: 'Glisan, Ben',
    title: '',
    color: '#494949',
    aliases: [
      'ben.glisan@enron.com',
      'glisan  ben',
      'Glisan, Ben F',
      'Ben, Glisan',
      'ben f glisan',
      'ben glisan',
      'ben glisan/hou/ect@ect',
      'glisan',
      'ben glisan @smtp@enronxgate',
    ],
  },
  {
    name: 'Kitchen, Louise',
    title: '',
    color: '#494949',
    aliases: [
      'kitchen  louise',
      'lkitchen@enron.com',
      'louise kitchen',
      'kitchen',
      'louise.kitchen@enron.com',
      'louise kitchen (e-mail)',
      'louise kitchen/hou/ect@ect',
      'louise kitchen & philippe bibi@enron',
      'louise kitchen@ect',
      'kitchen@mailman.enron.com',
      'louise.kitchen',
      'lkitchen',
      'kitchen@',
      'kitchens@jwemc.org',
      'cc:louise kitchen',
      'lkitchen@enron.co.uk',
    ],
  },
  {
    name: 'Kopper, Michael',
    title: '',
    color: '#494949',
    aliases: ['michael kopper@ect', 'michael kopper'],
  },
  {
    name: 'Lavorato, John',
    title: '',
    color: '#494949',
    aliases: [
      'lavorato  john',
      'john j lavorato',
      'john lavorato & louise kitchen@enron',
      'lavorato',
      'john.j.lavorato@enron.com',
      'lavorato@enron.com',
      'john.lavorato@enron.com',
      'john j lavorato/enron@enronxgate',
      'john.j. lavorato@enron.com',
      'lavorato@sympatico.ca',
      'john j lavorato/corp/enron',
      'john lavorato',
      'john j. lavorato',
      'theresa lavorato',
      'john. lavorato',
      'john lavorato (ene) (e-mail)',
      "'lavorato@enron.com'",
      'jlavorato.hba1989@ivey.ca',
      'dina lavorato',
      'theresa lavorato lavorato@sympatico.ca@enron',
      'imceanotes-theresa+20lavorato+20+3clavorato+40sympatico+2eca+3e+40enron@enron.com',
      'john j lavorato/enron@enronxgate@enron',
    ],
  },
  {
    name: 'Lay, Kenneth',
    title: '',
    color: '#494949',
    aliases: [
      'kenneth l lay@enron,',
      'kenneth l. lay - enron',
      'kenneth l. lay/enron',
      'kenneth lay (e-mail)',
      'kenneth l. lay (e-mail)',
      'lay  kenneth l.',
      'lay  kenneth',
      'dr. kenneth lay',
      'kenneth  lay',
      'ken lay (e-mail)',
      'ken lay',
      'kenneth l. lay',
      'lay  ken',
      'kenneth lay@enron',
      'kenneth l. lay',
      'lay  ken',
      'Chairman, Office Of The',
      'Chairman, Enron Office Of The',
      'Board@enron, Ken Lay- Chairman Of The',
      'kenlay@enron.com',
      'k.lay@enron.com',
      'Lay, Dr Kenneth',
      'L, Lay Kenneth',
      'Enron, Kenneth L Lay -',
      'k.l.lay@enron.com',
      'k.lay@enron.com',
      'k_lay@enron.com',
      'lay@enroncom, Ken',
      'klay@enron.com.',
      'klay@enron',
      'ken',
      'Lay/enron, Kenneth L',
      'Lay@enron, Ken',
      'lay',
      'kennethlay@enron.com',
      'kenneth_lay@enron.net',
      'kenneth.l.lay@enron.com',
      'kenneth',
      'ken_lay@enron.net',
      'ken.lay@enron.com',
      'Ken, Lay',
      'ken_lay@enron.com',
      'Lay@enron, Kenneth',
      'Lay, Kenneth L',
      'Chairman, Ken Lay - Office Of The',
      'kenneth.lay@enron.com',
      'kenneth_lay@enron.com',
      'layk@enron.com',
      'klay@enron.com',
      'Lay, Ken',
      'Kenneth, Lay',
      'kenneth lay',
      'ken lay@enron',
      'ken lay- chairman of the board@enron',
      'ken .lay@enron.com',
      'ken lay - office of the chairman',
      'mbx_klayofficechair@enron.com ',
      'ken lay-@enron',
      'ken lay- chairman of the board & ceo@enron',
      'ken.lay-.chairman.of.the.board@enron.com@enron communications',
      'imceanotes-ken+2elay-+2echairman+2eof+2ethe+2eboard+40enron+2ecom+40enron+20communications@enron.com',
      'ken lay-',
    ],
  },
  {
    name: 'McMahon, Jeffrey',
    title: '',
    color: '#494949',
    aliases: [
      'jeffrey.mcmahon@enron.com',
      'mcmahon  jeffrey',
      'jeffrey mcmahon',
      'jeffrey mcmahon@ect',
      'jeff mcmahon - president & coo',
      'mbx_anncjmcmahon@enron.com',
      'mcmahon',
      'jmcmahon@enron.com',
      'jmcmahon',
    ],
  },
  {
    name: 'Presto, Kevin',
    title: '',
    color: '#494949',
    aliases: [
      'presto',
      'presto  kevin m.',
      'kevin.m.presto@enron.com',
      'kevin m presto',
      'kevin m. presto',
      'kpresto@enron.com',
      'presto  kevin',
      'k.presto@enron.com',
      'evin presto',
      'kevin m presto/hou/ect@ect',
      'kevin presto',
      'kpresto',
      'kevin.presto@ubswenergy.com',
      'kmpresto@msn.com',
      'kmpresto@hotmail.com',
      'kevin presto (ene) (e-mail)',
      'kevin presto (ene) home email',
      'kevin m presto <kevin m>',
      'kevin m presto/enron@enronxgate@enron',
      'kpresto@ect.enron.com',
    ],
  },
  {
    name: 'Skilling, Jeff',
    title: '',
    color: '#494949',
    aliases: [
      'jeffrey k skilling@enron',
      'jeff skilling@enron',
      'jskilli@enron.com',
      'Skilling@enron, Jeffrey K',
      'Skilling@enron, Jeff',
      'Jeff, Skilling',
      'Skilling, Jeffrey',
      'jeff skilling',
      'jeffrey skilling',
      'skilling  jeff',
      'jeffreyskilling@yahoo.com',
      'ken lay and jeff skilling',
      'ken lay and jeff skilling@enron',
      'mbx_klayofficechair@enron.com',
      'ken lay and jeff skilling/corp/enron@enron',
      'imceanotes-ken+20lay+20and+20jeff+20skilling_corp_enron+40enron@enron.com',
      'skilling',
      'jeff_skilling',
      'jeff.skilling@enron.com',
      'jeff skilling (e-mail)',
      'jeff_skilling@enron.com',
      'eff.skilling',
      'jeff skilling- president and ceo@enron',
      'jeff.skilling',
    ],
  },
  {
    name: 'Symes, Kate',
    title: '',
    color: '#494949',
    aliases: [
      'symes  kate',
      'kate.symes@enron.com',
      'symes',
      'kate symes',
      'kate symes/pdx/ect@ect',
      'katesymes@ekno.com',
      'ksymes@gladston.uoregon.edu',
      'ksymes@enron.com',
      'kate  symes',
      'kate. symes@enron. com',
      'kate symes (e-mail)',
      'katesymes@microsoft.com',
    ],
  },
  {
    name: 'Whalley, Greg',
    title: '',
    color: '#494949',
    aliases: [
      'greg whalley',
      'gwhalle@enron.com',
      'gwhalley@enron.com',
      'Greg, Whalley',
      'whalley  greg',
      'whalley',
      'whalley@enron.com',
      'gregwhalley 8777865122@skytel.com@enron',
      'greg.whalley@enron.com',
      "'gregwhalley",
      'notes:gregwhalley',
      'greg.whalley',
      'greg.whalle',
      'greg whalley/hou/ect@ect',
      'office of the chairman - enron wholesale services- mark frevert and greg whalley',
      'greg whalley@ect',
    ],
  },
]

// TODO find other contacts associated with key terms

// set up contacts list from aliases, and map for quick access to contact
export const possibleHits = [
  // 'baxter',
  // 'boyle',
  // 'belden',
  // 'causey',
  // 'daso',
  // 'ellen',
  // 'fastow',
  // 'fleming',
  // 'watkins',
  // 'sherron',
  // 'frevert',
  // 'glisan',
  // 'kitchen',
  // 'kopper',
  // 'lavorato',
  // 'lay',
  // 'mcmahon',
  // 'presto',
  // 'skilling',
  // 'symes',
  // 'whalley',
  // 'watkins',
  // 'sherron',
  // 'buy',
  // 'mellencamp',
  // 'shackleton',
  // 'schwertner',
  // 'vargas',
  // 'galvan',
  // 'cash',
]
export const keyContacts: Contact[] = []
export const aliasMap = new Map()
aliases.map((contact) => {
  keyContacts.push({
    senderTotal: 0,
    receiverTotal: 0,
    asSender: [],
    asReceiver: [],
    ...contact,
  })
  contact.aliases.map((alias) => {
    aliasMap.set(alias.toLowerCase(), contact.name)
  })
  aliasMap.set(contact.name.toLowerCase(), contact.name)
})

export const filteredSenders = ['HotWebCash Newsletter']
