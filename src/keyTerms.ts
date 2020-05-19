import { PSTMessage } from 'pst-extractor'

// https://books.google.com/books?id=CeapJz_amLUC&pg=SL1-PA25&lpg=SL1-PA25&dq=enron+glossary&source=bl&ots=ZIvVX780A0&sig=ACfU3U1As4CgzXi4THiPraSuiTeh_vVpjg&hl=en&sa=X&ved=2ahUKEwiVypmsga_pAhWHsJ4KHXCbDfcQ6AEwCHoECAoQAQ#v=onepage&q=enron%20glossary&f=false

export const keyTerms = [
  'Avici',
  'Azurix',
  'Backbone',
  'Braveheart',
  'Catalytica',
  'Cortez',
  'Cuiaba',
  'Fishtail',
  'Merlin',
  'Merlin',
  'Osprey',
  'Rawhide',
  'Southampton',
  'TNPC',
  'Yosemite',
  'apache',
  'bammel',
  'bankrupt',
  'bankruptcy',
  'bobcat',
  'california',
  'campsie',
  'cayman',
  'chewco',
  'condor',
  'criminal',
  'death',
  'deathstar',
  'ebs',
  'electricity',
  'fraud',
  'granite',
  'grizzly',
  'harrier',
  'herron',
  'jedi',
  'litigation',
  'ljm',
  'ljm1',
  'ljm2',
  'mahonia',
  'maliseet',
  'monopoly',
  'oregon',
  'porcupine',
  'preservation',
  'pronghorn',
  'raptor',
  'raptors',
  'renegade',
  'retirement',
  'ricochet',
  'roadrunner',
  'shorty',
  'shutdown',
  'sidewinder',
  'snohomish',
  'stanley',
  'star',
  'steele',
  'swap',
  'talon',
  'tammy',
  'teresa',
  'timberwolf',
  'tonya',
  'trutta',
  'valhalla',
  'valor',
  'velocity',
  'whitewing',
]

export function hasKeyTerms(email: PSTMessage): boolean {
  for (const term of keyTerms) {
    if (email.body.indexOf(term) >= 0 || email.subject.indexOf(term) >= 0)
      return true
  }
  return false
}
