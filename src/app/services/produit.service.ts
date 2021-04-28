import { Subject } from 'rxjs';

export class ProduitService {

  produitsSubject = new Subject<any[]>();


  produits = [
    {
      id: 0,
      nom: 'Thé Corps Express',
      short_name: 'tex',
      prix: 9000,
      o_prix: '12000',
      star : 4,
      description:
        ["Notre thé corps express 100% naturel et bien plus performant que le thé corps simple agit dans votre organisme en coupe faim et brûleur de graisses. De plus il lutte contre la reprise du poids et brûle en moyenne 8kg en 20 jours "],
      client_satisfait: '45',
      duree: '15',
      mois_ajout: 'Mar',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '8.000',
          o_prix: '11.000',
          name: 'pack 20',
        },
        {
          prix: '9.000',
          o_prix: '12.000',
          name: 'pack 30',
        },
        {
          prix: '10.000',
          o_prix: '15.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '13 Janv 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bonjour. Juste pour vous dire que votre produit, je sentse produit marché sur moi. Je ne suis qu\'au 3ème jour ce matin, et mésurée mon tour detoi, j\'ai déjà perdu 1cm... vraiment bravo, du jamais vue, je sent que d\'ici un mois même rihana n\'aura pas un ventre aussi plat, quand c\'est bon c\'est bon'
        },
        {
          name: 'Fadie',
          date: '11 Fev 2021',
          post: 'Facebook',
          rate: 3,
          content: 'oui oui,je confirme. J\'ai perdu des kilos et même,comme suivrece régime n\'est pas facile. Vraiment bravo pour votre sincérité '
        },
        {
          name: 'Taty',
          date: '27 Fevrier 2021',
          post: 'Facebook',
          rate: 3,
          content: 'Merci pour ce thé g commence ya 1 semaine g perdu 3kg juste respecté et un peu de sacrifice ça marche vraiment, en tout cas pour moi'
        },
        {
          name: 'Janice Eliane',
          date: '28 Mars 2021',
          post: 'Facebook',
          rate: 3,
          content: 'J\'ai commencé le thé il y\'a ,une semaine et j\'ai perdu 3 kilos, j\'aipris celui de 9000f et sans blague sa m\'empêche même d\'avoir faim j\'ai constaté. Mercii'
        },
        {
          name: 'Anne',
          date: '03 Avril 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Très heureuse devous annoncer que quand j\'ai commencé avec le thé j\'étais à 84kg, ce matin jeme suis rendu compte que je suis à 81kg. Merci vraiment car vous faites du bon travail'
        },
        {
          name: 'Sacha',
          date: '03 Avril 2021',
          post: 'Facebook',
          rate: 3,
          content: 'Bonsoir désoléé pr le silence. Je tiens à vous remercier pour votre produit j\'ai perdu 5 kilo avec ce thé. Au début j\'ai été découragée la 1ère semaine, mais j\'ai tenue a finir le paquets pour ne pas perdre mon argent et à la 2ème semaine c\'étaut vraiment top. Je me suis vraiment affiné. J\'étis à 98, je suis à 93 malgré même que je trichais souvent. Merci vraiment.'
        }
      ]
    },
    {
      id: 1,
      nom: 'Thé Ventre Plat Express',
      short_name: 'tvx',
      prix: 7000,
      star : 4,
      o_prix: '10000',
      description:
        ["Reconnu par son éfficacité auprès de nos clients, notre thé ventre plat express 100% naturel et coupe faim de base vient brûler les graisses abdominales, et vous empêcher une reprise du ventre. Généralement utilisé après la maternité et consommation de bières il vous permet une perte de 8cm du tour de taille en 25 jours"],
      client_satisfait: '63',
      duree: '15',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '19 Janv 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bonjour juste pour vous dire que votre produit, je sent ce produit marché sur moi. Je ne suis qu\'au 3eme jour ce matin, et mésurée mon tour de taille, j\ai déjà perdu 1cm vraiment bravo, du jamais vue, je sent que d\'ici un mois même Rihanna n\'aura pas un ventre aussi plat que le mien'
        },
        {
          name: 'Eunicia',
          date: '28 Janv 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Suis a la 1ère semaine d\'utilisation et jevois deja le resultat. Un vrai coupe faim. Le tout c\'est de respecter ce qui est dit et c\'est sans effets secondaires'
        },
        {
          name: 'Ruth',
          date: '01 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bonjour votre produit es top. J\'ai suivi le traitement 4jours de suite et le ventre est tout partie. Vraiment c\'est un très bon produit '
        },
        {
          name: 'anonyme',
          date: '15 Avril 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bonjour, je me sens très bien, je perds progressivement du ventre, les resultats sont très interessant. A mon thé j\'ajoute du citron ou de la citronnelle quand je n\ai pas, et me voilà la nuit en train d\'uriner comme un robinet. j\ai aussi remarqué que c\'est un bon coupe faim'
        },
        {
          name: 'anonyme',
          date: '15 Avril 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'je n\'avais pas pris votre thé lorsque vous m\'aviez livré, je sortais d\'une maladie et vous m\'aviez conseillez d\'attendre quelques jours avant de le prendre. J\'ai vu les résultats au bout de quelques jours ensuite, j\'ai même arrêté car j\'avais bien fondu. J\ai gardé les habitudes alimentaires que vous m\'aiez donné pour maintenir mon poids actuel, et je suis ravi de vous dire que maintenant e me sens bien à l\aise dans ma peau' 
        }
      ]
    },
    {
      id: 2,
      nom: 'Thé HyperTension',
      short_name: 'tch',
      prix: 6000,
      star : 3,
      o_prix: '8000',
      description:
        ["Notre thé Hypertension, est reconnue pour ses propriétés d\'antidépresseur, mais aussi régule la tension, lutte contre vos troubles digestifs, favorise la bonne circulation sanguine et empêche la formation des cailloux ."],
      client_satisfait: '26',
      duree: '20',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '27 Fev 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bonjour. Juste pour vous dire que votre produit est efficace, ça m\'a vraiment aider à reguler ma tension causé par le stress en ce moment. Merci infiniment'
        }
      ]
    }, {
      id: 3,
      nom: 'Thé Cholesterol',
      short_name: 'tca',
      prix: 7000,
      o_prix: '5000',
      star : 3,
      description:
        ["Reconnu par son éfficacité auprès de nos clients, Notre Thé Hypertension améliore la digestion, lutte contre les douleurs rhumatismales, réduit les risques de calcul rénaux et régule le cholestérol"],
      client_satisfait: '41',
      duree: '25',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'Patrick',
          date: '05 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'J\'aime beaucoup le gout de ce thé, il est top, de plus le service client est toujours à votre disposition pour des conseils sur des aliments à consommer et ne pas consommer pour vous éviter une hausse de cholestéroL. Vous faites du bon travail et surtout ne changez pas' 
        }
      ]
    },
    {
      id: 4,
      nom: 'Thé Energy',
      short_name: 'ten',
      prix: 7000,
      o_prix: '10000',
      star : 4,
      description:
        ["Reconnu par son éfficacité auprès de nos clients, notre thé Energy augmente la libido, vous redonne du tonus et revigore l'organisme"],
      client_satisfait: '34',
      duree: '40',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '30 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'c\'est du lourd ce produit, faut revoir le goût sinon ce produit est vraiment efficace '
        }
      ]
    },
    {
      id: 5,
      nom: 'Crème Seins',
      short_name: 'cs',
      prix: 5500,
      o_prix: '7000',
      star : 4,
      description:
        ["Cette Crème seins 100% naturel et sans effets sécondaire est une crème raffermissante ayant pour but d'augmenter, soulever, reformer votre poitrine.  Les premiers resultats se font ressentir au bout de la troisième semaine."],
      client_satisfait: '87',
      duree: '45',
      mois_ajout: 'Juin',
      annee_ajout: '20',
      type: 'Crème',
      is_pack: false,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '27 Fev 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Ce produit fonctionne vraiment. Je l\'avais achété pour mon épouse'
        },
        {
          name: 'Vanessa',
          date: ' 01 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bonsoir juste pour vous dire que je suis satisfaite de vos produits. Je suis è deux semaines d\'utiliation et le resultat est dejà perceptible '
        },
        {
          name: 'anonyme',
          date: '15 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Au début qaund j\'avais acheté ce produit, je n\'avais pas tout suite vu le résultat et j\'étais déçu pour mon argent, mais 1 mois après le résultat étaient bien visible, et j\'en ai même recommander pour une seconde utilisation'
        }

      ]
    },
    {
      id: 6,
      nom: 'Crème fesses',
      short_name: 'cf',
      prix: 5500,
      star : 4,
      o_prix: '7000',
      description:
        ["Cette Crème fesses 100% naturel et sans effets sécondaire est une crème raffermissante ayant pour but d'augmenter, soulever, reformer votre fessier.  Les premiers resultats se font ressentir au bout de la troisième semaine."],
      client_satisfait: '78',
      duree: '45',
      mois_ajout: 'Juin',
      annee_ajout: '20',
      type: 'Crème',
      is_pack: false,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '27 Fev 2021',
          post: 'Facebook',
          rate: 3,
          content: 'Comment dire, votre produit est vraiment efficace, et je suis à ma deuxième commande. Que ceux qui doutent encore viennent me voir. Je l\'ai recommandé à deux de mes collègues, elles viendront chercher pour elles. Non mais quad c\'est du bon, il faut savoir apprecier. Merci'
        },
        {
          name: 'anonyme',
          date: '16 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Nice'
        }
      ]
    },
    {
      id: 7,
      nom: 'Crème anti vergetures',
      short_name: 'cav',
      prix: 5000,
      star : 4,
      o_prix: '6000',
      description:
        ["Cette Crème anti-vergeture 100% naturel et sans effets sécondaire est composé de végétaux et produits à porté de main, elle assure à votre peau un nettoyage de vos vergetures jusqu\'à 95% tout en protegeant votre peau d'une nouvelle appariation de vergetures."],
      client_satisfait: '56',
      duree: '45',
      mois_ajout: 'Fev',
      annee_ajout: '20',
      type: 'Crème',
      is_pack: false,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '01 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bon produit, mais tout depend de la naature des vergétures, pour moi, étant donné qu\'elles étaient ancienne, ca a un peu pris du temps, mais le résultats est pluôt encourageant'
        },
        {
          name: 'Cindy',
          date: '15 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Good Product. Really satisfied'
        },
        {
          name: 'Tina',
          date: '02 Avril 2021',
          post: 'Facebook',
          rate: 3,
          content: 'The product is really good, I am in my 2nd week of use, and I can reassure you that it works.'
        },
        
      ]
    },
     {
      id: 8,
      nom: 'Huile Taches Noires',
      short_name: 'htn',
      prix: 6000,
      star : 4,
      o_prix: '8000',
      description:
        ["Reconnu par ses propriétés purificatrices, notre Huile Tâches Noires élimine les taches noires rebelles, nettoie les aisselles et entre jambes, efface les boutons et cicatrices et adoucit la peau"],
      client_satisfait: '64',
      duree: '45',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '01 Mars Fev 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'je confirme moi même l\'efficacité de cette huile, entre mes aisseles qui étit noirata à cause des rasage et mon entre-jambes à cause des frottements que j\'ai eût à cause du surpoids, maintenant je me sent plutôt à l\'aise dans ma peau. merci infiniment '
        },
        {
          name: 'Doris',
          date: '15 Mars 2021',
          post: 'Facebook',
          rate: 3,
          content: 'Non mais qui êtes-vous? who are you? 10 jous d\'utilisation et je vois dejà de léger changement sur mes aisselles? je vais vous envoyez des clientes soyez en sûres. non mais bisous là bas'
        }, 
        {
          name: 'Evrade',
          date: '23 Mars 2021',
          post: 'Facebook',
          rate: 3,
          content: "Très heureuse ce soir de vous faire mon temoignage. J\'ai été recommandé par mon amie qui ventait vos produits de perte de poids, elle m\'a fait comprendre que vous vendez autres produits aussi, alors j\'ai moi décidé de vous faire confiance, alors me voici qui fouille en commentaire les temoignages, une dame disait qu\'elle avait eu des résultats en 10 jours, nespa voici moi qui passe ma commande. c\'est vrai qu\'en dix jours je n\'ai pas vu un changement et c\'est là que vous m\'aviez expliquer que les organismes sont différents il me faut juste être patiente, et aujourd\'hui je peux vous dire que je ne suis pas deçu de votre produit. Même les odeurs au niveau des aisselles sont parties, c\'est un véritable antiseptique. Merci à vous. Au faites, vous avez le meilleur services clients."
        }
      ]
    },
    {
      id: 9,
      nom: 'huile Cernes',
      short_name: 'hcn',
      prix: 5500,
      o_prix: '7500',
      star : 4,
      description:
        ["Notre Huile pour Cerne, est connue pour être une puissante décongestionnante veineuse, elle sera très efficace sur les cernes causées par un problème circulatoire."],
      client_satisfait: '45',
      duree: '45',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '27 Fev 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Very nice this products'
        }
      ]
    },
    {
      id: 10,
      nom: 'Huile Quintaux',
      short_name: 'hqt',
      prix: 7000,
      o_prix: '10000',
      star : 4,
      description:
        ["Reconnues pour son efficacité auprès de nos clients, notre Huile pour Quintaux élimine les taches des zones noires (orteils, pieds, coudes…), unifie et élimine les quinto des peaux normales et dures, éclaircit et adoucit la peau sans toute fois l\’arracher"],
      client_satisfait: '29',
      duree: '45',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'Charmène',
          date: '22 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'j\'ai decouvert vos produits chez ma soeur, et elle m\'a donné votre contact, depuis la je suis Abonné, j’avais les problemes de Quintaux au doigts, et aux pieds, aujourd’hui c’est complètement fini; et mon teint brille tout le temps'
        },
        {
          name: ' Vanessa',
          date: '01 Avril 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'c\'est vrai que le produit est efficace, bien que ça prend un peu plus de temps de mon côté, j\'ai une peau rebelle.'
        },
        {
          name: 'Yvanna',
          date: '01 Avril 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'J\’ai utilisé cette huile il y\'a de cela un mois, et c\’est vrai que au debut j\’etais un peu septique, car ma peau est très delicate, et depuis là mon teint est wow, bye bye quintaux. De sucroit la senteur n\'est pas mal'
        }
      ]
    }, {
      id: 11,
      nom: 'Huile Acnés',
      short_name: 'hac',
      prix: 6000,
      o_prix: '8000',
      star : 4,
      description:
        ["Reconnu pour ses propriétés antiseptiques et cicatrisantes, notre Huile Acnée estompe les cicatrices d\’acné, par ailleurs c\'est excellent anti inflammatoire et cicatrisant. Il attenue les rougeurs laissées par les boutons d\’acné"],
      client_satisfait: '8',
      duree: '45',
      mois_ajout: 'Avr',
      annee_ajout: '20',
      type: 'thé',
      is_pack: true,
      pack: [
        {
          prix: '6.000',
          o_prix: '8.000',
          name: 'pack 20',
        },
        {
          prix: '7.000',
          o_prix: '9.000',
          name: 'pack 30',
        },
        {
          prix: '8.000',
          o_prix: '10.000',
          name: 'pack 40',
        }
      ],
      s_proof: [
        {
          name: 'anonyme',
          date: '27 Fev 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Top'
        },
        {
          name: 'Bibiche',
          date: '15 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Pas facile qaund tu as toujours été victime d\'acnée pendant une partie de ta vie, et rien que pour avoir resolue partiellement mon problème, je vous dit infinement merci pour le travail que vous faites, jamais je n\'aurais pensée gagner ce combat. J\'espère qu\'après deux à trois utilisation je me serai en fin debarrassé de ça'
        },
        {
          name: 'anonyme',
          date: '15 Mars 2021',
          post: 'WhatsApp',
          rate: 3,
          content: 'Bonsoir, juste pour vous dire que je suis satisfaite du produit, j\aime beaucoup la senteur'
        }
      ]
    }

  ];

  emitProduitsSubject() {
    this.produitsSubject.next(this.produits.slice());
  }

  getProduitById(id: number) {
    const produit = this.produits.find(
      (s) => {
        return s.id === id;
      }
    );
    return produit;
  }
}