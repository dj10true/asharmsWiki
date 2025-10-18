const dollpage_con = document.querySelector("#dollpage_con");
const collection_assignment = document.querySelectorAll("collection_assignment");
const jobswap = document.querySelectorAll(".jobswap");
const jobswap_con = document.querySelectorAll(".jobswap_con");
const Skin_container =  document.getElementById("Skin_container");
const skin_collection = document.querySelectorAll(".skin_collection");
const maus_collection = document.getElementById("maus_collection");
const skua_collection = document.getElementById("skua_collection");
const expanded_container = document.getElementById("expanded_container");
const Expanded = document.querySelectorAll(".Expanded");
const bodyContainer = document.getElementById('body_container');
const  doll_body = document.querySelector('.doll_body');
const dollnames = Array.from(document.querySelectorAll('.dollIcon')).map(a=>a.alt);
const full = document.querySelectorAll("[data-full]");


//const bodyContainer = document.querySelector('.modal-con');
const  dollheaders = document.querySelectorAll(".displayname_inserter");
const  captionText = document.getElementById("caption");
const  bio = document.querySelector('.doll_header');
const  closebtn = document.getElementsByClassName("close")[0];
const insertaffects = document.querySelectorAll('.insert_affect');
const insertSkillNames  = document.querySelectorAll(".insert_active_name");
const insertpassiveNames = document.querySelectorAll(".insert_name");
const airtile_inserter = document.querySelectorAll(".airtile_inserter");
const tile_inserter = document.querySelectorAll(".tile_inserter");


const unique_skill = document.querySelectorAll(".unique_skill");

const Dolls =
{  
  maus:{
    passives:[
     {
       name:"Dawn Of Black-Cross", 
       affect: "At the start of your turn, increases ally black cross members [Damage~Cut]-(15%) & [Anti-Air-FirePower]-(15%)"
      },
      {
       name:"Counter(Heavy Tank)",
       affect: "During the enemies turn if attacked, Carries Out a Counter attack on the enemies 1~Square Ahead, if your reaction value is greater move first"
      },
      {
       name:"Heavy Tank Type Battle Group", 
       affect: "At the start of your turn if attacked, Carries Out a Counter attack on the enemies 1~Square Ahead"
      },
      {
       name:"Super Heavy Equipment", 
       affect: "If an enemy attempts to attack you, increase own [Damage-Cut](18%/this attack only)"
      },
      {   
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: "At the start of your turn if attacked, Carries Out a Counter attack on the enemies 1~Square Ahead"
      }
    ],
    unique_skill:[
      {
        name:"Additional Artillery Attack", 
        affect: "'Anti Ground attack Skill', after attacking attacks the same target again"
      }
    ]
  }, 

  Aircraft11:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Super Long Range Attack", 
        affect: `Carries out an attack on 2-Sqauds of "ground" enemies in range of 0-3~Squares below, 
        has [50%]base Power for every 1-Square of distance between the first aerial square and the target,
        give this attack [Increased Power](20%)`
      }
    ]
  },
  
  Chito:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Continued Vigilance ● Revised", 
        affect: `Carries out a single powerful attack on a group of enemies in range,
         if the target is a "heavy" type, carries out an additional attack`
      }
    ]
  },

  Centurion:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Two For One Bullet", 
        affect: `Carries out an attack on any target 1~Square ahead and ab additional attack on any target 2~Squares ahead`
      }
    ]
  },

  Black_Widow:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Fatal Capture", 
        affect: `Reduces own [Threat Level -5](1-turn),
          increases own [Anti Air Firepower](15%/for this attack) after attacking a group of "flying" enemies, 
          inflicts [Burn](2-turns/Stackable) to self`
      }
    ]
  },

  Bf109:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Fighting Range", 
        affect: `High Flying Attack Skill,
         after attacking attacks the same target again 1-time, transfers into [Low Flying] mode retreats back 2~Sqaures`
      }
    ]
  },

  Sun_Shamon:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"After My Death Comes The Flood", 
        affect: `Carries out an attack on any 2-Groups of enemies,
         if in [Old Wondering Soul] state has a gauranteed chance of [Crit] for this attack only`
      }
    ]
  },

  Sun_Shamon:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"After My Death Comes The Flood", 
        affect: `Carries out an attack on any 2-Groups of enemies,
         if in [Old Wondering Soul] state has a gauranteed chance of [Crit] for this attack only`
      }
    ]
  },

  Senha:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Samurai", 
        affect: `Carries out an attack on 1-Group of "ground" enemies, 
        after attacking increases all ally "Far Eastern Heavy Metal" members [Firepower] & [Damage Cut](20%/2-turns/Non-stackable)`
      }
    ]
  },

  Ryuusei:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Stern Girl", 
        affect: `Carries a powerful attack on the "ground" enemies 2-3~Squares below,
         if in [High Flying] mode deals an additional 600 [Burn] Damage, if in [Low Flying] mode carries out an additional attack on an enemy 1~Square ahead`
      }
    ]
  },

  Puma:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Hit And Run ● Revised", 
        affect: `"Mobile" mode limited skill,
         Carries out a powerful attack on a enemy group, applies [Marked](1-turn) to an enemy that has the lowest hp within range of 1-3~Squares ahead, 
         after attacking retreats back 1~Square`
      }
    ]
  },

  Raincaster:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Low Flying Precise Bombing", 
        affect: `Powerful "low flying" anti ground attack skill, 
        before attacking increases own [Anti Ground Hit Rate](10%) [Crit Rate](20%)`
      }
    ]
  },

  Raiden:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Ultra ● Heavenly Sword", 
        affect: `"Low flying" limited skill, 
        before attacking increases own [Crit Rate](50%),
        after attacking inflicts [Intercept!](2-turns) transitions into [High Flying] mode, if [Intercept!] has activated increases [Crit Rate](50%)`
      }
    ]
  },

  Pershing:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Sudden Outburst", 
        affect: `Anti ground attack skill, 
        if the enemies [Squad Count] is reduced carries out an additional attack, makes the enemy retreat back 1~Square`
      }
    ]
  },

  Lightning:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"The Twins Playtoy", 
        affect: `High Flying Attack Skill, after attacking attacks the same target again 1-time, transitions into [Low Flying] mode`
      }
    ]
  },

  B29:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Punishing Angel ● Revised", 
        affect: `Carries out a powerful attack on the "ground" enemies 0-2~Squares below, 
        if the target is not a "Heavy" type inflicts [Restriction](during this turn), if the target is a "Heavy" type applies [Giant Bullet Hole](during this turn), at the time of being attacked if your [Armor] is lower then your [Penetration] reduces own [Damage Cut](30%/for this attack)`
      }
    ]
  },

  Skua:{
    passives:[
     {
       name:"Into The White", 
       affect: `If an ally "black cross" bomber type gets attacked by an enemy, 
       increases all "black cross" ally bombers [Damage Cut](50%) 1-time`
      },
      {
       name:"Ground Siege Net ● Revised", 
       affect: `If the targets [Squad Count] is lower then your own,
        at the time of attacking increases own [Anti Ground Firepower](11%)`
      },

      {
        name:"Enemy Search Report", 
        affect: `If attacked has a 50% chance to [Mark] the enemy for 3-turns`
       },

       {
        name:"battle Bomber Plane", 
        affect: `Increases own [Anti-Ground-Firepower](10%/Permanent)`
       },

       {
        name:"Sudden Gale |", 
        affect: `If an enemy is defeated by your attack gain +2 CP`
       },

       {
        name:"Low Flying Special Affect", 
        affect: `At the start of yor phase, if in "Low Flying" mode increases own [Reaction +9] & [Mobility]`
       },
    ],
    unique_skill:[
      {
        name:"Enemy Hostility", 
        affect: `Increases allies [Firepower](35%/1-turn/permanent) & [Mobility](15%/1-turn/permanent) that are within the same square`
      }
    ]
  },

  Tis_a:{
    passives:[
     {
       name:"Personal Protection Maid", 
       affect: `At the start of your phase, 
       if there are any "Bomber Planes" within the same square as you reduce their [Threat Level -2], 
       increases own [Accuracy] & [Crit Rate](11%) if an ally get's attacked, if "tis" & any [Red October] "Bomber" allies exists and the enemy is 1-2~squares within range of "Tis", "Tis" will carry out a cautionary attack,
        if "Tis" has a higher [reaction] value then the enemy,
        "Tis" will move first`
      },
      {
       name:"Hunting Heavy Type ● Revised", 
       affect: `If attacking a "Heavy" Type enemy increases own [FirePower](8%)`
      },

      {
        name:"Defensive Support ● Revised", 
        affect: `At the start of your phase, 
        if there exists an ally "Bomber"  with a [Squad Count] of less then 1 behind "Tis", increases own [Threat Level +4](1-turn) & [Reaction +7](1-turn)`
       },

       {
        name:"Anti Heavy Special Attack", 
        affect: `If attacking a "Heavy" Type enemy increases own [Firepower](10%)`
       },

       {
        name:"Deadly Battle |||", 
        affect: `[Fighter Plane Frame], before carrying out an attack,
         if there are no signs of enemies on the ground increases own [Anti Air Firepower](14%/for this attack)`
       },
    ],
    unique_skill:[
      {
        name:"Normal Tackle", 
        affect: `"Low Flying" Limited Skill, 
        attacks "Defense Species" with a strong attack and attacks "Special Types" with a extra powerful attack, 
        before attacking if you have advanced this turn increases own [Anti Air Firepower](20%/during this turn)`
      }
    ]
  },

  
  B4:{
    passives:[
     {
       name:"Hammer Of Vengeance", 
       affect: `If an ally has been attacked increases own [Anti Ground Firepower](7%/1-turn) & [Crite Rate](12%/1-turn)`
      },
      {
       name:"Frontline Contact", 
       affect: `Before attacking if there exists an ally 1~square in front of an enemy that is within range, 
       increases own [Accuracy](5%/during this turn) & [Crit Rate](9%/during this turn)`
      },

      {
        name:"Strong Formation", 
        affect: `At the time of attacking, 
        if there is no living ally within your own square or the square behind you or 2~squares ahead and further away, 
        if at least 1 ally is alive, increases own [Firepower](5%)`
       },

       {
        name:"Low Tempature Adaptability", 
        affect: `[Wet Lands] & [Frozen Mountains] & [Frozen Rivers], terrain demerits of these types are nullified`
       },
    ],
    unique_skill:[
      {
        name:"Strength Of 1-Thousand People", 
        affect: `Stationary Anti Ground Ranged Attack Skill,
         carries out an attack that ignores range on all [Marked] ground units 2-times`
      }
    ]
  },

  B50:{
    passives:[
     {
       name:"Hammer Of Vengeance", 
       affect: `If an ally has been attacked increases own [Anti Ground Firepower](7%/1-turn) & [Crite Rate](12%/1-turn)`
      },
      {
       name:"Frontline Contact", 
       affect: `Before attacking if there exists an ally 1~square in front of an enemy that is within range, 
       increases own [Accuracy](5%/during this turn) & [Crit Rate](9%/during this turn)`
      },

      {
        name:"Strong Formation", 
        affect: `Advances forward 1~Square. carries out an attack on all "ground" enemies within range of 0-2~Squares, 
        if in [High Flying]mode increases own [Anti Ground Firepower](14%/for this attack)`
       },

       {
        name:"Forgiving Angel", 
        affect: `Advance forward 1~Square and carries out an attack on all "ground" enemies within range of -2-0~Squares,
         if in [High Flying] mode increases own [Anti Ground Firepower](14%/for this attack only)`
       },
    ],
    unique_skill:[
      {
        name:"Strength Of 1-Thousand People", 
        affect: `Stationary Anti Ground Ranged Attack Skill,
         carries out an attack that ignores range on all [Marked] ground units 2-times`
      }
    ]
  },

  Bearcat:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Rare Bear", 
        affect: `Attacks a "flying" enemy that is 1~Square ahead, 
        after attacking if your [Mobility] is 2.5 x greater then the target carries out the following attack twice to the same target`
      }
    ]
  },

  Hellcat:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Side Attack", 
        affect: `Powerful anti ground attack skill,
        before carrying out an attack increases own [Crit Damage](20%/during this turn), 
        if in "mobile" mode carries out an additional attack`
      }
    ]
  },

  Halifax:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
       name:"Anti Heavy Tank Special Attack ● Ground", 
       affect: `If you are attacking a 'Heavy' type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Dangerously Sharp Words", 
        affect: `Before carrying out an attack increases own [Mobility](8%/during this turn), 
        after attacking reduces [Accuracy](14%/3-turns/Non-stackable) & [Mobility](14%/3-turns/Non-stackable) of all "ground" enemies within range`
      }
    ]
  },

  Fokker:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
        name:"All Weather Proof", 
        affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
    ],
    unique_skill:[
      {
        name:"the Myth Return", 
       affect: `Carries out a blade battle on 1~Group of enemies ignoring the range, 
       if the target is inflicted with any of these affects [Pierced] & [Detached Steel] & [Threatened],
        increases [Firepower](100%) for each status inflicted, and reduces targets [Damage Cut](25%/this time only)`
      }
    ]
  },

  He177A5:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
      {
        name:"All Weather Proof", 
        affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
    ],
    unique_skill:[
      {
        name:"Wireless Guidance order", 
       affect: `"High flying" mode limited skill,
        carries out a super powerful atack on 1~Group of [Marked] "ground" enemies in range,
        if there exist's no [Marked] "ground" enemies,
        carries out an additional super powerful attack on the "ground" enemies 1-3~Squares below, 
        after attacking transitions into [Low flying] mode`
      }
    ]
  },

  Firebrand:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Road To Paradise", 
        affect: `Carries out an attack on 1~Squad of "flying" enemies 1-2~Squares ahead, 
        after attacking transittions into [Low Flying] mode, 
        if the target's [Squad Count] was reduced increases [Final Damage](15%/permanent/Non-stackable)`
      },
    ]
  },

  Flying_Fortress:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"All Out Shooting", 
        affect: `Anti ground attack skill, carries out an attack on every [Marked] enemy ignoring range,
         reduces the targets [Reaction](9%/1-turn) & [Mobility](8%/1-turn)`
      },
    ]
  },

  Do335A:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Distanced Shot (Slow)", 
        affect: `Carries out an attack on the target, if you have moved more then 2~Squares inflicts [Restriction](1-turn) to the enemy`
      },
    ]
  },

  Daemon:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Fire In The Hole • Revised", 
        affect: `"Low Flying" mode limited skill, carries out a powerful splash attack on all enemies in range`
      },
    ]
  },

  Coventry:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Politicion On Paper • Trickster", 
        affect: `Increases all "ground" ally "white rose Academy" members [Damage Cut](10%/1-turn) & [Anti Ground Firepower](10%/1-turn)`
      },
    ]
  },

  Shuvalbe:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Rocket Barrage", 
        affect: `Carries out a "spash attack" on 1~Squad of enemies,
         before activating if there are no enemies with 1-Squad carries out an additional attack`
      },
    ]
  },

  Churchell_MK2:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Iron Curtain", 
        affect: `Anti ground attack skill,
         attacks always [Crit](this attack only), increases [Damage Cut](15%/2-turns) for the allies behind you`
      },
    ]
  },

  Leopard:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Quick Claws • Revised", 
        affect: `Powerful anti ground attack skill, for this attack deals additional damage based on 70% of your [Armor]`
      },
    ]
  },

  KV1:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Frontline Observation • Revised", 
        affect: `Powerful anti ground attack skill, 
        if the targets [Squad Count] is reduced increases ally "Red October Academy" [Anti Ground Firepower](15%/1-turn)`
      },
    ]
  },

  KV2:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"The Roaring Of Battle • Revised", 
        affect: `Activates [Demolishing Barrage] to all of the enemies within range and pushes them back 1~Square, 
        advances forward a max of 2~Squares if in 'Mobile" mode increases own [Crit Damage](30%/for this attack), 
        if in "Stationary" mode double these affects`
      },
    ]
  },

  Jagd_Tiger:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Jagd Tigers Concealment", 
        affect: `Enters [Caution] stance, reduces own [Threat Level -2] & increases [Hit Rate](5%), 
        carries out a pre-emptive attack on two enemies each with 1-pre emptive attack 1-time`
      },
    ]
  },

  Jagd_Panther:{
    passives:[
     {
       name:"All Weather Proof", 
       affect: `[Cloudy],[Strong Winds],[Thundering Clouds], Gains adaptability to these climates`
      },
  
    ],
    unique_skill:[
      {
        name:"Man made God Spear", 
        affect: `Increases own [Penetration](12%), 
        carries out a powerful attack on 1~group of enemies this attack is guaranteed to hit`
      },
    ]
  },


  Ahat:{
    passives:[
      {
        name:"IIIII",//"Dawn Of Black-Cross", 
        affect: "At the start of your turn, increases ally black cross members [Damage~Cut]-(15%) & [Anti-Air-FirePower]-(15%)"
      },
      {
        name:"Counter(Heavy Tank)",
        affect: "During the enemies turn if attacked, Carries Out a Counter attack on the enemies 1~Square Ahead, if your reaction value is greater move first"
      },
      {
        name:"Heavy Tank Type Battle Group", 
        affect: "At the start of your turn if attacked, Carries Out a Counter attack on the enemies 1~Square Ahead"
      },
      {
        name:"Super Heavy Equipment", 
        affect: "If an enemy attempts to attack you, increase own [Damage-Cut](18%/this attack only)"
      },
      {   
        name:"Anti Heavy Tank Special Attack ● Ground", 
        affect: "At the start of your turn if attacked, Carries Out a Counter attack on the enemies 1~Square Ahead"
      }
    ],
    unique_skill:[
      {
        name:"Auto Shooting ● Revised", 
        affect: "Powerful Stationary Anti Ground Attack Skill, after attacking attacks the same target again"
      }]
  },

  //2-STARS Below
  Hyabusa:{
    passives:[
      {
        name: "Dancing War Child", 
        affect: `Before Carrying out a blade battle, if there exists a flying enemy unit 1~square ahead of you, 
        increases this blade battles [Power](40%)`
      },
      {
        name:"Anti Light Type Special Attack ● Air",
        affect: `If attacking a "Light Type" enemy, increases own [Anti Air Firepower](10%)`
      },
      {
        name:"Low Air Special Affect", 
        affect: `At the start of your phase, if in "Low Flying" mode increases own [Reaction +9] & [Mobility](10%)`
      },
    ],
    unique_skill:[
      {
        name:"How is it For You ● Pleasure", 
        affect: `Applies [Countdown 10](non-stackable) affect to the enemies 3~squares ahead of you, 
        every time the enemy move [Countdown 10] is reduced by 1, when it reaches 0 the target receives 62300[Burn] damage,
        if an enemy with [Countdown 10] attacks the count will react with 700~62300[Burn] damage to the target, 
        after the damage activates [Countdown] affect is removed`
      }]
  },


  Beaufort:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Flying Patrol", 
        affect: `Removes all "Ground" enemies [Concealment], has a 60% chance to inflict [in sight](mark for 2-turns) to enemy 1-squad`
      }]
  },

  CW_19:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Its... A Bomb!",
        affect: `Carries out an attack on 1-group of enemies 0-3 squares below,
        after attacking inflicts [Why Arent You Dead?], 
        before attacking if the target is in [Why Arent You Dead?] state, carries out a "Special Attack" on 2-Enemy Groups 0-2~Squares below, this "Special Attack" is not considered an attack, [Why Arent You Dead?](1-turn) [Threat Level +1])`
      }]
  },

  Matilda:{
    passives:[
      {
        name: "Royal Behind", 
        affect: `at the start of your turn, 
        if there exists any [Royal White Rose Academy] allies behind you,
        increase own [Armor] & [Anti Firepower](11%/1-turn)`
      },
      {
        name:"Desert Adaptabilty",
        affect: `[Sandy Ground] [Sand Dunes] [Ruins] nullifies demerits from these terrains`
      },
      {
        name:"Anti Medium Type Special ● Ground", 
        affect: `At the start of your turn if attacked, Carries Out a Counter attack on the enemies 1~Square Ahead`
      },
    ],
    unique_skill:[
      {
        name:"Close Range Assult",
        affect: `Carries out an attack on 1-Squad, makes the enemy retreat back 1-Square`
      }]
  },

  Achilles:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"I Know A Similar Way",
        affect: `Carries out an attack on the enemies 2-3~Squares ahead, 
        after attacking carries out an additional attack on the enemies ahead in the 4th~Square`
      }]
  },

  AEC_AC:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"STUBBORN",
        affect: `"Mobile" state limited skill, carries out an attack on 1-enemy, 
        after attacking removes all [Marked] affects, and retreats back 1~Square, 
        during this turn if [AEC GC] has used "1-Hit & Retreat", 
        if [AEC AC] is in the same square after "1-Hit & Retreat" deals an additional attack on the target 1-time`
      }]
  },

  Sterling_MK1:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Giant Beast Circus",
        affect: `Increases [Anti Air Firepower](11%/3-turns) for all [Royal White Rose Academy] allies,
         if an enemy has attacked counterattack 1-time(1-turn/1-time only), Then inflicts [Marked](during this turn) status to a random enemy`
      }]
  },

  Chafee:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Wild Cavalry",
        affect: `Carries out an attack on an enemy, before attacking increases own [Anti Ground Firepower](10%),
        after attacking advances 1-square,
        if the target is already inflicted with [This One] carries out an additional attack`
      }]
  },

//ONE STARS
 T_26E:{
    passives:[
      {
        name: "Ecstatic Sisters", 
        affect: `At the start of your phase if any "Red October" light type allies exist, 
        increases own [Mobility] & [Anti Ground Firepower](20%/this turn) & [Threat Level +3](during this turn)`
      },
      {
        name:"Firing Gate",
        affect: `Before taking an action if in "Mobile" mode, 
        increases own [Anti Ground Accuracy] & [Crit Rate](10%/during this turn)`
      },
      {
        name:"Artillery Squad Mirror • Revised",
        affect: `At the start of your phase,
        if in "Stationary" mode inflicts [Marked](1-turn) on all enemy "Ground" units 1~Square ahead,
        before an ally "Tank Destroyer" & "Cannon" ally unit attack,
        increases own [Accuracy](14%) & [Crit Damage](32%)`
      },
      {
        name:"Low Tempature Adaptability",
        affect: `[WetLands] & [Frozen Mountains] & [Frozen Rivers], terrain demerits of these types are nullified`
      },
      {
        name:"Anti Light Type Special Attack ● Ground",
        affect: `If attacking a "Light Type" enemy, increases own [Anti Ground Firepower](10%)`
      },
      {
        name:"Sin Area Flame |",
        affect: `Before attacking if you have moved 2~squares this turn increases own [Firepower](14%/1-time only)`
      },
    ],
    unique_skill:[
      {
        name:"Frontward Leader ● Revised",
        affect: `"Mobile Type" Limited Skill, carries out a strong attack on a group of enemies 1~sqaure ahead, 
        depending on the number of "Red Cross" light type ground allies increases own [Crit Rate](16%/32%/48%)`
      }]
  },

  Tetrak:{
    passives:[
      {
        name: "Surprise Vangaurd", 
        affect: `has adaptability to most terrains`
      },
    ],
    unique_skill:[
      {
        name:"Overdrive",
        affect: `Enters "Overdrive" state increases own [Mobility](15%) & [Armor-Piercing](15%),
        increases own [Crit-Damage](40%/1-Turn) & [Firepower](40%/1-Turn) after attacking while in "Overdrive" [Restriction](1-Turn) is applied to self`
      }]
  },

  Brenten:{
    passives:[
      {
        name: "Anti-Damage Structure", 
        affect: `if an enemy attacks, has a 30% chance to increase own [Damage-Cut](18%/for this attack)`
      },
    ],
    unique_skill:[
      {
        name:"Tactical Defense",
        affect: `Increases own [Armor](20%/3-turns) & [Threat Level +5](3-turns),
        if attacked by an enemy on their turn inflicts [Marked](3-turns) to that target`
      }]
  },

  SBD_Dawnt:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Full Body Dive",
        affect: `[Ground Firing Skill],
        after attacking has a 35% chance to carry out 1-strong attack on the same target`
      }]
  },

  T_70:{
    passives:[
    {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"JUST YOU WAIT!",
        affect: `If in "mobile" mode, 
        bestows to all "Red October Alliance" members [Crit Rate](15%/2-turns) & [Mobility](11%/2-turns), 
        if in "Stationary" mode, besotws to all "Red October Alliance" members [Crit Damage](26%/-3turns) [Ground Firepower](11%/3-turns)`
      }]
  },

  Ju88A_4:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Condensed Attack",
        affect: `"High Flying Anti Ground Firing Skill", 
        Carries out an attack on multiple enemies after attacking attacks 1-more time`
      }]
  },

  Grille:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Precise Shot",
        affect: `"Stationary Anti Ground attack Skill", 
        able to attack multiple targets, increases ground ally units [Crit Rate](15%/1-turn)`
      }]
  },

  M10_Wolverine:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Marked Shooting",
        affect: `"Stationary Anti Ground Attack Skill", 
        if the target is [Marked] there is a gauranteed chance to do an additional attack`
      }]
  },

  Pe2:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"High Flying Stealth Operation",
        affect: `"Anti Ground Attacking Skill", 
        if in "High Flying"mode increases own [Anti Ground Hit rate](10%) & [Crit Rate](20%)`
      }]
  },

  F4F_Wildcat:{
    passives:[
      {
        name: "Anti Light Type Attack • Air", 
        affect: `If attacking a "Light" Type enemy increases own [Anti Air Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Nearby Shooting",
        affect: `Increases own [Anti Air Firepower](10-30%) depending on the amount of enemies within range,
         attacks 1 enemy Squad in range`
      }]
  },

  Hesshia:{
    passives:[
      {
        name: "Natural Affect", 
        affect: `After being attacked has a gauranteed chance to apply [Marked](75%/2-turns) to the enemy that has attacked`
      },

      {
        name: "Crowd Affect", 
        affect: `If your [Squad Count] is over 8, increases own [Anti Ground Firepower](15%)`
      },

      {
        name: "Light Battle Army(Tank)", 
        affect: `At the start of your phase,
         if there are any ally "light" tanks within the same square as you increases [Crit Rate](15%/1-turn/Non-stackable) for all of the "light" tank allies within the same sqaure`
      },

      {
        name: "Low Tempature Adaptability", 
        affect: `[Water Lands], [Snow Mountains], [Frozen Rivers], nullifies the demerits of these terrains`
      },

      {
        name: "Ant Light Type Attack • Ground", 
        affect: `If attacking a "Light" type ground unit, increases own [Ant Ground Firepower](10%)`
      },


      {
        name: "Death Battle", 
        affect: `「Fighter Type」 frame , before carrying  out an attack, 
        if there exists no "Flying" units during this attack increases own [Anti Air Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Mobile Shooting • Attack",
        affect: `Anti Ground Attacking Skill, if in "Mobile" mode increases own [Mobility](20%/2-turns)`
      }]
  },

  MC_200:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Imperials Past Dream",
        affect: `Carries out an attack on 1-Squad of "flying" enemies, 
        during the start of the enmies phase if there exists any ally "Imperial Black Cross" members enter [Caution] stance, 
        on the enemies phase carries out a attack on the first "flying" enemy to move that's 1-Square ahead 1-time`
      }]
  },

  T77_MGMC:{
    passives:[
      {
        name: "Alarmer", 
        affect: `Only if you are present in the battlefield, 
        if an ally "Stardust Federation" member is attacked increase[Damage Cut](10%)`
      },

      {
        name: "Air Support", 
        affect: `If attacking a "Flying" enemy, reduces the enemies [Anti Ground Hit Rate](5%/1-turn/Non-Stackable)`
      },

      {
        name: "Crowd Affect (Ground)", 
        affect: `If your [Sqaud Count] is above 3, at the time of attacking increases [Anti Ground Firepower](5%)`
      },

      {
        name: "Low Tempature Adaptability", 
        affect: `[Water Lands], [Snow Mountains], [Frozen Rivers], nullifies the demerits of these terrains`
      },

      {
        name: "Anti Light Type Attack", 
        affect: `If attacking a "light" type enemy, increases own [Firepower](10%)`
      },

      {
        name: "Furious Rage Ι", 
        affect: `Every turn increases own [Crit Rate](3%/Max 9%), if a crit occurs increases own [Crit Damage](15%/3-turns)`
      },
    ],
    unique_skill:[
      {
        name:"Fire Net",
        affect: `Anti Air Attack Skill, 
        carries out an attack on multiple enemies, inflicts [Damage Cut Down] & [Increased Damage Dealt](15%/1-turn)`
      }]
  },

  He111_H3:{
    passives:[
      // {
      //   name: "Anti-Damage Structure", 
      //   affect: `if an enemy attacks, has a 30% chance to increase own [Damage-Cut](18%/for this attack)`
      // },
    ],
    unique_skill:[
      {
        name:"Decoy Squad",
        affect: `Carries out a bombing on the target, 
        increases [Anti Ground Firepower](8%/2-turns) of all ally "Black Cross [fighter Plane]" members present in the battlefield`
      }]
  },

  Hoischlek:{
    passives:[
      // {
      //   name: "Anti-Damage Structure", 
      //   affect: `if an enemy attacks, has a 30% chance to increase own [Damage-Cut](18%/for this attack)`
      // },
    ],
    unique_skill:[
      {
        name:"Precise Shot",
        affect: `"Stationary Anti Ground attack Skill", 
        able to attack multiple targets, increases ground ally units [Crit Rate](15%/1-turn)`
      }]
  },

  T60_Z:{
    passives:[
      {
        name: "Purchase it Then Exit", 
        affect: `At the start of your phase if there are no other ally "cannon" type allies,
         increases own [Anti Air Firepower] & [Mobility(10%/during this turn)] & [Reaction +5](during this turn)`
      },
      {
        name: "Anti Light Type Attack", 
        affect: `If attacking a "light" type enemy, increases own [Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Interference Bullet Shower",
        affect: `"Stationary" mode limited skill, 
        carries out an attack on the "flying" enemies 0-3~Squares above, 
        after attacking reduces the targets [Threat Level -2](3-turns), 
        if the targets [Threat Level] is below 1 inflicts [Missfire](1-turn) to the target`
      }]
  },

  M3_Lee:{
    passives:[
      {
        name: "Aged Instructor", 
        affect: `At the start of the battle increases resistance to [Restrain](30%/Permanent), 
        if there are 3 or more "stardust federation" allies alive increases all units [Mobility] & [Crit Rate](9%/Permanent)`
      },
      {
        name: "Forest Hills Adaptability", 
        affect: `[Dense Forest] [Cliffs] [Woods],nullifies the demerits of these terrains`
      },
      {
        name: "Anti-Light Type Special Attack", 
        affect: `If attacking a "Light" type enemy, increase own [Anti-Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Commander Of The South",
        affect: `Makes an ally "stardust federation" member that is 1~Square ahead advance forward 1~Square`
      }]
  },

  BT5:{
    passives:[
      {
        name: "Low Tempature Adaptability", 
        affect: `[Water Lands], [Snow Mountains], [Frozen Rivers], nullifies the demerits of these terrains`
      },
    ],
    unique_skill:[
      {
        name:"Close Range Firing",
        affect: `Anti Ground Attack Skill, increases own [Firepower](15%/for this attack)`
      }]
  },

  I165:{
    passives:[
      {
        name: "REPLACE", 
        affect: `REPLACE`
      },
    ],
    unique_skill:[
      {
        name:"REPLACE",
        affect: `REPLACE`
      }]
  },

  Veroche:{
    passives:[
      {
        name: "Desert Adaptability", 
        affect: `[Sandlands], [Sand Mountains], [Deserted Ruins], nullifies the demerits of these terrains`
      },
      {
        name: "Anti Light Type Attack", 
        affect: `If attacking a "light" type enemy, increases own [Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Acrobatic Shooting",
        affect: `Stationary Anti Ground Attack Skill, after attacking increases own [Mobility](15%/2-turns)`
      }]
  },

  B1_Bis:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Giant Beast Charge",
        affect: `Anti Ground Attack Skill, has a 15%chance to apply [MissFire](1-turn), carries out an additional attack`
      }]
  },

  HS129:{
    passives:[
      {
        name: "Anti Heavy Type Special Attack • Revised", 
        affect: `If attacking a "Heavy" Type enemy, increases own [Anti Ground Firepower](10%)`
      },
      {
        name: "Attack Aircraft", 
        affect: `If there is no special skill explanation, 
        deals Normal Damage, (Not splash damage)`
      },
    ],
    unique_skill:[
      {
        name:"Giant Beast Charge",
        affect: `Anti Ground Attack Skill, has a 15%chance to apply [MissFire](1-turn), carries out an additional attack`
      }]
  },

  Hurricane_MKⅠ:{
    passives:[
      {
        name: "Tracking", 
        affect: `At the time of attacking when a [Crit] occurs, 
        if in "High Flying" mode reduces the targets [Accuracy](20%/1-turn), 
        if in "Low Flying" mode increases own [Crit Rate](25%/1-turn)`
      },
      {
        name: "Anti Light Type Attack • Air", 
        affect: `If attacking a "Light" Type flying enemy increases own [Anti Air Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Bee Sting",
        affect: `"Anti Air Attack Skill", before attacking increases [Crit Rate](20%/2-turn)`
      }]
  },

  SU26:{
    passives:[
      {
        name: "Obedient & Absent Minded", 
        affect: `At the start of your phase, 
        if not [Marked] gives [Concealment] to self, 
        before taking action if [T-26] is present in the battlefield increases [Crit Rate](20%), 
        afer attacking removes [Concealment] & [Marked] cannot co-exist`
      },
    ],
    unique_skill:[
      {
        name:"Waking From Sleep",
        affect: `"Stationary" mode limited skill, 
        carries out an attack on every "ground" enemy 2-3~Squares ahead, after attacking transitions into "Mobile" mode`
      }]
  },

  M8:{
    passives:[
      {
        name: "Sweet Heart", 
        affect: `Only if you are in the battlefield, increases [Mobility] & [Armor](20%) of all "Stardust Federation" allies`
      },
      {
        name: "Sense Of Danger (Land) • Revised", 
        affect: `At the start of you phase,
         if there exists any enemies 1-2~Squares ahead increases own [Reaction](11%/1-turn) & [Armor](14%/1-turn)`
      },
      {
        name: "Strengthening Formation", 
        affect: `At the time of attacking, 
        if there are no ally units in the same square as you or a square behind you, 
        and if there is at least 1-ally 2~Squares ahead or further increases own [Firepower](15%)`
      },
      {
        name: "Forest Hills Adaptability", 
        affect: `[Dense Forest] [Cliffs] [Woods],nullifies the demerits of these terrains`
      },
      {
        name: "Anti Light Type Attack • Ground", 
        affect: `If attacking a "Light" Type enemy increases own [Anti Ground Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"A Praisworthy Bombarding",
        affect: `"A strong anti gorund attack skill",
         able to hit multiple targets, increases [Crit Damage](15%/1-turn) of all "Stardust Federation"allies`
      }]
  },

  LaGG3:{
    passives:[
      {
        name: "", 
        affect: ``
      },
    ],
    unique_skill:[
      {
        name:"Aim For The Future",
        affect: `Removes 1-Buff from all ally "Red October"members`
      }]
  },

  MaldaΙΙ:{
    passives:[
      {
        name: "Pioneer", 
        affect: `If your [Squad Count] was lowered,
         Increases all ally "Black-Cross" members [Anti-Ground Firepower](15%/3-Turns/non-stackable), 
         gain 5-CP(Available 3times per battle)`
      },
      {
        name: "Ground Siege Net • Revised", 
        affect: `If the targets [Squad Count] is lower then your own, increases own [Anti-Ground Firepower](8%)`
      },
      {
        name: "Air-Force Response", 
        affect: `after attacking a ground unit,
         if there exists an ally "Flying" unit above the target increases all ally "Flying" units [Crit-Rate](9%/1-Turn)`
      },
      {
        name: "Desert Adaptation", 
        affect: `[Sandlands],[Sand Mountains],[Deserted Ruins],nullifies the demerit affect of these climates`
      },
      {
        name: "Anti-Medium Type Special Attack • Ground", 
        affect: `If attacking a "Medium" Type enemy increases own [Anti Ground Firepower](10%)`
      },
      {
        name: "Furious Rage", 
        affect: `Increases own [Crit-Rate](3%/Max 9%) if a crit occured increases [Crit-Damage](15%/3-Turns)`
      },
    ],
    unique_skill:[
      {
        name:"Cautionary Fire",
        affect: `"Stationry" mode attack skill, 
        enters [Cautionary] stance, carries out an attack on the closest enemy that took an action within range`
      }]
  },


  //LIMITED
  Marfusha:{
    passives:[
      {
        name: "Weapon Repair", 
        affect: `Before Taking an action if your [HP] is at 34% of [Maximum HP], 
        recover [HP](66% of [Maximum HP]/1-time use per battle)`
      },
      {
        name: "Rebalance", 
        affect: `At the start of your phase, if in "Stationary" Mode/"High Altitude" mode,
        reduces own [Firepower](20%/this turn), increases own [Armor](20%/this turn) & [Mobility](20%/this turn) `
      },
      {
        name: "Trade Off", 
        affect: `At the start of your phase, if in "Mobile" mode/"Low Altitude" mode increases own [Firepower](50%/this turn),
        and reduce own [Damage Cut](50%/this turn)`
      },
      {
        name:"Low Tempature Adaptability",
        affect: `[WetLands], [Snowy Mountains], [Rivers], nullifies the demerits of these terrains`
      },
      {
        name: "Anti Light Type Special Attack", 
        affect: `If attacking a "Light" type enemy, increases own [Firepower](10%)`
      },
    
      {
        name:"Devil Of Rudan",
        affect: `After carrying out an attack, remove 2-buffs from the target, activates only onece during battle`
      },
    ],
    unique_skill:[
      {
        name:"Electro-Thermal Cannon",
        affect: `Carries out a powerful attack on all "flying" enemies ahead of you`
      }]
  },

  Laica:{
    passives:[
      {
        name: "Frontline Police", 
        affect: `At the start of the battle increases [Firepower](5%/permanent) to all 'Light Type' allies,
         [Only If Present in the battlefield] after 'Marfusha' attacks an enemy attacks the same target(Available once per battle Use Counts: 1)`
      },
      {
        name: "Forest Hills Adaptability", 
        affect: `[Dense Forest] [Cliffs] [Woods],nullifies the demerits of these terrains `
      },
      {
        name: "Shotgun", 
        affect: `Gains a "Splash Effect", if attacking a "Light Type" enemy increases own [Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Wide Shot",
        affect: `Attacks the existing enemies 1-3~Squares ahead with 75%[Output],
         if attacking an enemy 1-2~Squares ahead reduces their [Damage Cut](55%/35%/this attack only) individually`
      }]
  },

  Albina:{
    passives:[
      {
        name: "All You Can Defeat", 
        affect: `At the start of your phase, Gains 1[CP], every turn increases own[Crit Rate](15%)`
      },
      {
        name: "Super Firepower", 
        affect: `Before carrying out an action, if an ally that has taken action before you was attacked by an enemy,
        increases own [Firepower](15%/this turn)`
      },
      {
        name:"Desert Adaptabilty",
        affect: `[Sandy Ground] [Sand Dunes] [Ruins] nullifies demerits from these terrains`
      },
      {
        name: "Anti Medium Type Special Attack", 
        affect: `If attacking a "Medium" type enemy, increases own [Firepower](10%)`
      },
    ],
    unique_skill:[
      {
        name:"Crazy Shot",
        affect: `Carries out an attack on a group of existing enemies 1-3~Squares ahead, 
        if the remaining [CP ]is above 4 carries out an additional attack, if it's above 8 carries out another attack`
      }]
  },

  Strelka:{
    passives:[
      {
        name: "Reading Partner", 
        affect: `At the start of your phase increases "Bions" [Firepower](15%/this turn),
         after using [Energy Exhaustion] if "Bion" is in the battlefield carries out an additional attack on the target with 50%[Damage Output] 1-time`
      },
      {
        name: "Anti Light Type Special Attack", 
        affect: `If attacking a 'light type' enemy increases own [Firepower]10%`
      },
    ],
    unique_skill:[
      {
        name:"Aerial Bomb",
        affect: `Attacks all existing "flying" enemies in range of 1-2~Squares ahead with a [Splash Effect],
         also attacks all existing "ground" enemies in range of 1-2~Squares below with a [Splash Effect]`
      }]
  },

  Bion:{
    passives:[
      {
        name: "Soldier Scouting Duties", 
        affect: `At the start of your phase, 
        increases all "ground" allies [Firepower](10%/this turn) that are 1-1~Squares ahead, 
        if there are no ally "ground" units within range inflicts [Marked](this turn) to the enemy "ground" units 1-4~Squares ahead`
      },
      {
        name: "Forest Hills Adaptability", 
        affect: `[Dense Forest] [Cliffs] [Woods],nullifies the demerits of these terrains`
      },
      {
        name: "Anti Light Type Special Attack", 
        affect: `If attacking a 'light type' enemy increases own [Firepower]10%`
      },
    ],
    unique_skill:[
      {
        name:"Spike",
        affect: `Stationary mode limited skill, enters [Vigilant] stance on the next turn carries out a strong 'cautionary' pre-emptive attack on the existing "ground" enemies 1-4~Squares ahead [Limited Use Counts: none],
       after the enemy who has recieved the cautionary attack moves reduces there [Damage Cut](10%/1-turn)`
      }]
  },

  Felicette:{
    passives:[
      {
        name: "Zero Ability To Live", 
        affect: `Before takig an action if [Marfusha],[Laica],[Albina],[Bion],[Strelka] are present in the battlefield increases own [Armor Penetration](6%per ally unit present/permanent),
        during battle activates only 1-time`
      },
      {
        name: "Anti-Heavy Type Special Attack", 
        affect: `If you are about to attack a "Heavy-type" enemy, increase own [Firepower](10%)`
      },
      {
        name: "Disguise", 
        affect: `At the start of your phase if in "Stationary" mode reduces own [Reaction -2](during this turn)`
      },
    ],
    unique_skill:[
      {
        name:"Throw Away My Support",
        affect: `Stationary Mode Limited skill, 
        carries out a powerful attack on 1-Squad of enemies 3-5~Suares ahead, 
        if this attack has defeated a "Special Individual" inflicts [Restriction](1-turn) to all enemies, 
        after attacking inflicts [Marked](2-turns) to self`
      }]
  },

  Belka:{
    passives:[
      {
        name: "Motherly", 
        affect: `at the start of your own pase,
         increases [Crit Damage](24%/during this turn) of all "Tank Destroyer" & "Cannon" type allies, 
         before [Felicette] attacks an enemy "Heavy" unit carries out an additional attack on the enemy 1-time with 50%[Output],
         this affect can be activated any amount of times`
      },
      {
        name: "Rebalance", 
        affect: `at te start of your own phase, 
        if in "Hold/High Flying" form reduces own [Firepower](20%/during this turn), 
        increases own [Mobility](11%/11%(this is maybe a type in game lol)/during this turn)`
      },
      {
        name: "Repair Shot", 
        affect: `after attacking on an even turn, Heals own [Health](20% of an individual allies [Anti Air Firepower])`
      },
    ],
    unique_skill:[
      {
        name:"Barricade LV2",
        affect: `During this turn , if an ally "Ground-Unit" has been attacked, 
        reduces the attackers [Anti Ground Firepower](30% of Belkas [HP]/ for this attack only/ can only activate 2-times)`
      }]
  },

  Claire:{
    passives:[
      {
        name: "Air Bomb Raid", 
        affect: `After an action, 
        if in "Stationary Mode" carries out an additional attack on 1-gorup of enemies ahead of you 1-time with 100% [Output],
        this affect can be activated once each battle and can be used up to 3-times,
        a "Special Attack" is one where the player[You] do not actively set up`
      },
      {
        name: "Turret", 
        affect: `at the start of your phase, if in "Stationary" Mode increases own [Armor](8%) & [Accuracy](8%/during this turn)`
      },
      {
        name: "Travelling Module", 
        affect: `increases own [Mobility](8%/permanent), during a odd turn increases [AP +1]`
      },
    ],
    unique_skill:[
      {
        name:"Shield Exhaustion",
        affect: `Stationary Mode limited skill, 
        increases own [Threat Level +3](during this turn) & [Damage Cut](100%/during this turn), 
        increases [CP Consumption +5](permanent/unremovable/unable to be resisted/can duplicate up to 10-times) for all of your skills`
      }]
  },

  Hachiroku:{
    passives:[
      {
        name: "a place with railways", 
        affect: `before you take action,
        if there exist any other "railroad" allies increases own [Damage Cut](24%/this turn,
        moves 1~square in front of any other "railrod" allies that are the most ahead,
        "railroad": hachiroku, olivi, nishika)`
      },
      {
        name: "Awakening", 
        affect: `At the start of your phase,
        increases each of own copies [Anti Ground Firepower](hacirokus initial [HP] and current [HP])(this turn),
        this affect can be activated any amount of times,
        before carrying out an attack recovers own [HP](33% of max [HP]) & remove all debuffs,
        this affect can be activated 3-times in a single battle`
      },
      {
        name: "Resonance", 
        affect: `At the start of your phase,
        if there exists any other "railroad" ally increases all "railroad" allies [Crit Rate](40%/this turn),
        pulls any damage that other "railroad" allies will take to hachiroku(excluding blade attacks))`
      },

      {
        name: "Railroad", 
        affect: `[Railroad] nullifies the demerits of this terrain`
      },

      {
        name: "Gale Of Wind", 
        affect: `If dealing an attack defeats an enemy unit, gain 2[CP]`
      },
    ],
    unique_skill:[
      {
        name:"What Connects us",
        affect: `"Stationary" mode limited skill,
       carries out an attack with 150%[Power] on  3-squads of "ground" units 1-2~squares away,
       after attacking  increases all ally "ground" units [Total Anti Ground Firepower](25% of hachiroku's [Anti Ground Firepower]/1-turn/non stackable) &
       all ally "flying" units [Total Anti Air Firepower](25% of hachiroku's [Anti Ground Firepower]/1-turn/non stackable)`
      }]
  },


}
let inserted = false;
function createDivs(count,callback) {
  

  tile_inserter.forEach(tile=>{
  for (let i = 0; i < count; i++) {
    if(i>=count) return
    if(!inserted){
     const Tile = document.createElement('div');
     Tile.className = 'Tiles';
     tile.appendChild(Tile)
     s()
    }    
  }
  })

  function s(){
    for (let index = 0; index < callback; index++) {
      createDivs(s)
    }
  }
}

function createAirDivs(count,callback) {
  

  airtile_inserter.forEach(tile=>{
  for (let i = 0; i < count; i++) {
    if(i>=count) return
    if(!inserted){
     const Tile = document.createElement('div');
     Tile.className = 'Tiles';
     tile.appendChild(Tile)
     a()
    }    
  }
  })

  function a(){
    for (let index = 0; index < callback; index++) {
      createDivs(a)
    }
  }
}



//The Src For Modal Images Inside Modal

// //Collab/Limiteds
const Marfusha  = "/img/BaseArt/MarfushaFull.png";
const Laica     = "/img/BaseArt/LaicaFull.png";
const Albina    = "/img/BaseArt/AlbinaFull.png";
const Bion      = "/img/BaseArt/BionFull.png";
const Felicette = "/img/BaseArt/FelicetteFull.png";
const Strelka   = "/img/BaseArt/StrelkaFull.png";
const Belka     = "/img/BaseArt/BelkaFull.png";
const Claire    = "/img/BaseArt/ClaireFull.png";
const Hachiroku = "/img/BaseArt/HachirokuFull.png";
const Olivi     = "/img/BaseArt/OliviFull.png";
const Nishika   = "/img/BaseArt/NishikaFull.png";
 
//three stars
const mausFull    = "/img/BaseArt/maus full.png";
const Aircraft11  = "/img/BaseArt/Aircraft11Full.png";
const Skua        = "/img/BaseArt/SkuaFull.png";
const TisA        = "/img/BaseArt/Tis-AFull.png";
const B4full      = "/img/BaseArt/B4Full.png";
const ahatFull    = "/img/BaseArt/AhatFull.png";
const Chito       = "/img/BaseArt/ChitoFull.png";
const Centurion   = "/img/BaseArt/CenturionFull.png";
const Blackwidow  = "/img/BaseArt/BlackwidowFull.png";
const Bf109       = "/img/BaseArt/Bf109Full.png";
const Shamon      = "/img/BaseArt/ShamonFull.png";
const Senha       = "/img/BaseArt/SenhaFull.png";
const  Ryusei     = "/img/BaseArt/RyuseiFull.png";
const  Puma       = "/img/BaseArt/PumaFull.png";
const  Raincaster = "/img/BaseArt/RaincasterFull.png";
const  Raiden     = "/img/BaseArt/RaidenFull.png";
const  Pershing   = "/img/BaseArt/PershingFull.png";
const  Lightning  = "/img/BaseArt/LightningFull.png";
const  B29        = "/img/BaseArt/B29Full.png";
const  Hellcat    = "/img/BaseArt/HellcatFull.png";
const  Fokker     = "/img/BaseArt/FokkerFull.png";
const  Halifax    = "/img/BaseArt/HalifaxFull.png";
const  He177      = "/img/BaseArt/He177aFull.png";
const  Firebrand  = "/img/BaseArt/FirebrandFull.png";
const  Flyingfortress = "/img/BaseArt/FlyingfortressFull.png";
const  Bearcat  = "/img/BaseArt/BearcatFull.png";
const  Do335    = "/img/BaseArt/Do335aFull.png";
const  Daemon   = "/img/BaseArt/DaemonFull.png";
const  Coventry ="/img/BaseArt/CoventryFull.png";
const  Shuvalbe = "/img/BaseArt/ShuvalbeFull.png";
const  Churchellmk2 = "/img/BaseArt/Churchellmk2Full.png";
const  Leopard = "/img/BaseArt/LeopardFull.png";
const  Kv1 = "/img/BaseArt/Kv85Full.png";
const  Kv2 = "/img/BaseArt/Kv2Full.png";
const  Jagdtiger   = "/img/BaseArt/JagdtigerFull.png";
const  Jagdpanther = "/img/BaseArt/JagdpantherFull.png";
const  ISU222 = "/img/BaseArt/Isu122Full.png";
const IL2M    = "/img/BaseArt/Il2mFull.png";
const IS1 = "/img/BaseArt/IS-1Full.png";
const Hui = "/img/BaseArt/HuiFull.png";
const Panther = "/img/BaseArt/PantherFull.png";
const Ho229 = "/img/BaseArt/Ho229Full.png";
const Mustang = "/img/BaseArt/MustangFull.png";
const Meteor = "/img/BaseArt/MeteorFull.png";
const Fw190 = "/img/BaseArt/Fw189Full.png";
const Bulldog = "/img/BaseArt/BulldogFull.png";
const Shiden = "/img/BaseArt/ShidenFull.png";
const Fukuyama = "/img/BaseArt/FukuyamaFull.png";
const Ascender = "/img/BaseArt/AscenderFull.png";
const BeauFort = "/img/BaseArt/BeaufortFull.png";
const CW19 = "/img/BaseArt/Cw19Full.png";
const Sterling_MK1 = "/img/BaseArt/StarlingFull.png";
const FW189 = "/img/BaseArt/Fw189Full.png";

// two stars
const  Hyabusa  = "/img/BaseArt/HyabusaFull.png";
const  Beaufort = "/img/BaseArt/BeaufortFull.png";
const  Cw19     = "/img/BaseArt/Cw19Full.png";
const  Matilda  = "/img/BaseArt/MatildaFull.png";
const  Achilles = "/img/BaseArt/AchillesFull.png";
const  AEC      = "/img/BaseArt/AecFull.png";
const  Sterling = "/img/BaseArt/StarlingFull.png";
const  Pe8      = "/img/BaseArt/Pe8Full.png";
const  Fw189    = "/img/BaseArt/Fw189Full.png";
const  Mitchell = "/img/BaseArt/MitchellFull.png";
const  R35      = "/img/BaseArt/R35Full.png";
const Prototype = "/img/BaseArt/PrototypeFull.png";
const Ram_MK1 = "/img/BaseArt/RamFull.png";
const Suisei = "/img/BaseArt/SuiseiFull.png"
const TKS = "/img/BaseArt/TksFull.png";
const Honi = "/img/BaseArt/HoniFull.png";
const Tomohawk = "/img/BaseArt/TomohawkFull.png";
const Yer2 = "/img/BaseArt/Yer2Full.png";
const Yek7 = "/img/BaseArt/Yak7Full.png";
const Hien = "/img/BaseArt/HienFull.png";
const Helldiver = "/img/BaseArt/HelldiverFull.png";
const Havok = "/img/BaseArt/HavokFull.png";
const ZT1 = "/img/BaseArt/AMR35_ZT1Full.png";
const Hago = "/img/BaseArt/HagoFull.png";
const Shouki = "/img/BaseArt/ShoukiFull.png";
const Prist = "/img/BaseArt/PristFull.png";
const Number4 = "/img/BaseArt/Number4Full.png";
const Panal = "/img/BaseArt/PanalFull.png";
const Oisha = "/img/BaseArt/OishaFull.png";
const Mosquito = "/img/BaseArt/MosquitoFull.png";
const Martin = "/img/BaseArt/MartinFull.png";
const La5F = "/img/BaseArt/La5fFull.png";
const Rensan = "/img/BaseArt/RensanFull.png";
const Smoventie = "/img/BaseArt/SmoventieFull.png";
const Bellwind = "/img/BaseArt/VillebellwindFull.png";
const Corsair = "/img/BaseArt/CorsairFull.png";
const AT1 = "/img/BaseArt/At1Full.png";
const churchellmkv = "/img/BaseArt/Churchellmk5Full.png";
const groundbomber11 = "/img/BaseArt/Groundbomber_type11Full.png";
const Ju88A4 = "/img/BaseArt/Ju88A-4Alt.png";
const I220 = "/img/BaseArt/I-220Full.png";
//one stars
const  T26E      = "/img/BaseArt/T-26EFull.png";
const  Tetrak    = "/img/BaseArt/TetrakFull.png";
const  Brenten   = "/img/BaseArt/BrentenFull.png";
const  Dawnt     = "/img/BaseArt/DawntFull.png";
const  T70       = "/img/BaseArt/T-70Full.png";
const  Ju88      = "/img/BaseArt/Ju88A-4Full.png";
const  Grille    = "/img/BaseArt/GrilleFull.png";
const  Wolverine = "/img/BaseArt/WolverineFull.png";
const  Pe2       = "/img/BaseArt/Pe-2Full.png";
const  WildCat   = "/img/BaseArt/WildCatFull.png";
const  Hesshia   = "/img/BaseArt/HesshiaFull.png";
const  Mc200     = "/img/BaseArt/Mc200Full.png";
const  T77       = "/img/BaseArt/T77Full.png";
const  He111     = "/img/BaseArt/He111Full.png";
const  Hoischlek = "/img/BaseArt/HoischlekFull.png";
const  T60z      = "/img/BaseArt/T60zFull.png";
const  M3lee     = "/img/BaseArt/M3leeFull.png";
const  BT5       = "/img/BaseArt/BT5Full.png";
const  I165      = "/img/BaseArt/I165Full.png";
const  Veroche   = "/img/BaseArt/VerocheFull.png";
const  Bis       = "/img/BaseArt/BisFull.png";
const  Hs129     = "/img/BaseArt/Hs129Full.png";
const  Hurricane = "/img/BaseArt/HurricaneFull.png";
const  Su26      = "/img/BaseArt/Su26Full.png";
const  M8        = "/img/BaseArt/m8Full.png";
const  Lagg3     = "/img/BaseArt/LaggFull.png";
const  Malda     = "/img/BaseArt/MaldaFull.png";





function Display(doll,id,displayname){
  const body = document.getElementById(doll);
  let h_tanksrc     = document.getElementById('heavytanksrc');
  let h_cannonsrc   = document.getElementById('heavycannonsrc');
  let h_aasrc = document.getElementById('heavyaasrc');
  let h_tdsrc = document.getElementById('heavytdsrc');

  let m_tanksrc   = document.getElementById('medtanksrc');

  let l_tanksrc   = document.getElementById('lighttanksrc');
  let l_cannonsrc = document.getElementById('lightcannonsrc');
  let l_aasrc = document.getElementById('lightaasrc');
  let l_tdsrc = document.getElementById('lighttdsrc');

  let h_bombersrc   = document.getElementById('heavybombersrc');
  let h_fightersrc  = document.getElementById('heavyfightersrc');
  let h_attackersrc = document.getElementById('heavyattackersrc');

  let m_bombersrc   = document.getElementById('medbombersrc');

  let l_fightersrc  = document.getElementById('lightfightersrc');
  let l_attackersrc = document.getElementById('lightattackersrc');


  h_tanksrc.getAttribute('src');
  h_cannonsrc.getAttribute('src');
  h_aasrc.getAttribute('src');
  h_tdsrc.getAttribute('src');

  m_tanksrc.getAttribute('src');

  l_tanksrc.getAttribute('src');
  l_cannonsrc.getAttribute('src');
  l_aasrc.getAttribute('src');
  l_tdsrc.getAttribute('src');


  h_bombersrc.getAttribute('src');
  h_fightersrc.getAttribute('src');
  h_attackersrc.getAttribute('src');

  m_bombersrc.getAttribute('src');

  l_fightersrc.getAttribute('src');
  l_attackersrc.getAttribute('src');


  displayname = id;
  console.log(doll)
  jobswap_con.forEach(j=>{ j.style = "display:none"; })
  


  document.querySelectorAll(".doll_body").forEach(body=>{
    body.style.display = "none";
    document.getElementById('body_container').style = 'display:flex';   
  });
  dollpage_con.style = "padding-bottom: 0";
  body.style = "display: block";
  doll.className += "";

  document.querySelectorAll('.displayname_inserter').forEach(name=> name.innerText = `Dollname: `+ displayname)
  
  
  switch (id) {
    case "Maus":
      h_tanksrc.src = mausFull;
    break;

    case "Skua":
      h_fightersrc.src = Skua;
    break;
    case "Tis-A":
      h_fightersrc.src = TisA;
    break;
    case "Centurion":
      m_tanksrc.src = Centurion;
    break;
    case "Blackwidow":
      h_fightersrc.src = Blackwidow;
    break;
    case "Bf109":
      l_fightersrc.src = Bf109;
    break;
    case "Sun_Shamon":
      h_cannonsrc.src = Shamon;
    break;
    case "Senha":
      m_tanksrc.src = Senha;
    break;
    case "Ryusei":
      l_attackersrc.src = Ryusei;
    break;
    case "Puma":
      l_tanksrc.src = Puma;
    break;
    case "RainCaster":
      h_bombersrc.src = Raincaster;
    break;
    case "Raiden":
      l_fightersrc.src = Raiden;
    break;
    case "Pershing":
      h_tanksrc.src = Pershing;
    break;
    case "Lightning":
      h_fightersrc.src = Lightning;
    break;
    case "B29":
      h_bombersrc.src = B29;
    break;
    case "Tis-A":
      h_fightersrc.src = TisA;
    break;
    case "B50":
      h_bombersrc.src = B50;
    break;
    case "BearCat":
      l_fightersrc.src = Bearcat;
    break;
    case "HellCat":
      l_tdsrc.src = Hellcat;
    break;
    case "HaliFax":
      h_bombersrc.src = Halifax;
    break;
    case "Fokker":
      h_fightersrc.src = Fokker;
    break;
    case "He177A":
      h_bombersrc.src = He177;
    break;
    case "FireBrand":
      l_attackersrc.src = Firebrand;
    break;
    case "Flying_Fortress":
      h_bombersrc.src = Flyingfortress;
    break;
    case "Do335A":
      h_fightersrc.src = Do335;
    break;
    case "DaeMon":
      l_fightersrc.src = Daemon;
    break;
    case "Coventry":
      l_tanksrc.src = Coventry;
    break;
    case "Shuvalbe":
      h_fightersrc.src = Shuvalbe;
    break;
    case "Churchell MK.ΙΙ":
      h_tanksrc.src = Churchellmk2;
    break;
    case "Leopard":
      l_tanksrc.src = Leopard;
    break;
    case "KV1":
      h_tanksrc.src = KV1;
    break;
    case "KV2":
      h_tanksrc.src = Kv2;
    break;
    case "JagdTiger":
      h_tdsrc.src = Jagdtiger;
    break;
    case "JagdPanther":
      h_tdsrc.src = Jagdpanther;
    break;
    case "ISU222":
      h_tdsrc.src = ISU222;
      
      //two stars below
    break;
    case "IL2M":
      l_attackersrc.src = IL2M; 
    break;
    case "IS1":
      h_tanksrc.src = IS1;
    break;
    case "Hui":
      l_cannonsrc.src = Hui;
    break;
    case "Panther":
      m_tanksrc.src = Panther;
    break;
    case "Ho229":
      h_fightersrc.src = Ho229;
    break;
    case "Mustang":
      h_fightersrc.src = Mustang;
    break;
    case "Meteor":
      h_bombersrc.src = Meteor;
    break;
    case "Fw190":
      l_fightersrc.src = Fw190;
    break;
    case "Fokker":
      l_fightersrc.src = Fokker;
    break;
    case "Bulldog":
      l_tanksrc.src = Bulldog;
    break;
    case "I220":
      l_fightersrc.src = I220;
    break;
    case "Shiden":
      l_fightersrc.src = Shiden;
    break;
    case "Fukuyama":
      h_bombersrc.src = Fukuyama;
    break;
    case "Ascender":
      l_fightersrc.src = Ascender;
    break;
    case "Fw190":
      l_fightersrc.src = Fw190;
    break;
    case "Hyabusa":
      l_fightersrc.src = Hyabusa;
    break;
    case "BeauFort":
      m_tanksrc.src = BeauFort;
    break;
    case "CW19":
      l_attackersrc.src = CW19;
    break;
    case "Matilda":
      m_tanksrc.src = Matilda;
    break;
    case "Achilles":
      h_tdsrc.src = Achilles;
    break;
    
    case "AEC":
      l_tanksrc.src = AEC;
    break;
    
    case "Sterling_MK1":
      h_bombersrc.src = Sterling_MK1;
    break;
    
    case "Pe8":
      h_bombersrc.src = Pe8;
    break;
    
    case "FW189":
      h_attackersrc.src = FW189;
    break;
    
    case "Mitchell":
      m_attackersrc.src = Mitchell;
    break;
    
    case "R35":
      l_tanksrc.src = R35;
    break;
    
    case "Prototype":
      l_tanksrc.src = Prototype;
    break;
    
    case "Ram_MK1":
      m_tanksrc.src = Ram_MK1;
    break;
    
    case "Suisei":
      l_attackersrc.src = Suisei;
    break;
    
    case "TKS":
      l_tdsrc.src = TKS;
    break;
    
    case "Honi":
      l_tdsrc.src = Honi;
    break;
    
    case "Tomohawk":
      l_fightersrc.src = Tomohawk;
    break;
    
    case "Yer2":
      m_bombersrc.src = Yer2;
    break;
    
    case "Yak7":
      l_fightersrc.src = Yak7;
    break;
    case "Hien":
      l_fightersrc.src = Hien;
    break;
    
    case "Helldiver":
      l_attackersrc.src = Helldiver;
    break;
    
    case "Havok":
      h_attackersrc.src = Havok;
    break;
    
    case "ZT1":
      l_tanksrc.src = ZT1;
    break;
    
    case "Hago":
      l_tanksrc.src = Hago;
    break;
    
    case "Shouki":
      l_fightersrc.src = Shouki;
    break;
    
    case "Prist":
      h_cannonsrc.src = Prist;
    break;
    
    case "Number4":
      m_tanksrc.src = Number4;
    break;
    
    case "Panal":
      l_tanksrc.src = Panal;
    break;
    
    case "Oisha":
      h_tanksrc.src = Oisha;
    break;
    
    case "Mosquito":
      h_bombersrc.src = Mosquito;
    break;
    
    case "Martin":
      m_bombersrc.src = Martin;
    break;
    
    case "La5F":
      l_fightersrc.src = La5F;
    break;
    
    case "Rensan":
      h_bombersrc.src = Rensan;
    break;
    
    case "Smoventie":
      l_tdsrc.src = Smoventie;
    break;
    
    case "Bellwind":
      l_aasrc.src = Bellwind;
    break;
    
    case "Corsair":
      l_fightersrc.src = Corsair;
    break;
    
    case "At1":
      l_tdsrc.src = AT1;
    break;
    
    case "churchellmkv":
      h_cannonsrc.src = churchellmkv;
    break;
    
    case "Ground_Bomber_Type-11":
      m_bombersrc.src = groundbomber11;
    break;
    //end 2star
    
    case "T26E":
      l_tanksrc.src = T26E;
    break;
    
    case "Tetrak":
      l_tanksrc.src = Tetrak;
    break;
    
    case "Brenten":
      l_tanksrc.src = Brenten;
    break;
    
    case "Dawnt":
      l_attackersrc.src = Dawnt;
    break;
    
    case "Ju88A4":
      m_bombersrc.src = Ju88A4;
    break;
    
    case "Grillé":
      l_cannonsrc.src = Grille;
    break;
    
    case "Wolverine":
      h_tdsrc.src = Wolverine;
    break;
    
    case "Pe2":
      h_attackersrc.src = Pe2;
    break;
    
    case "WildCat":
      l_fightersrc.src = WildCat;
    break;
    
    case "Hesshia":
      l_tanksrc.src = Hesshia;
    break;
    
    case "MC200":
      l_fightersrc.src = Mc200;
    break;
    
    case "T77_MGMC":
      l_aasrc.src = T77;
    break;
    case "He111":
      m_bombersrc.src = He111;
    break;
    
    case "Hoischlek":
      h_cannonsrc.src = Hoischlek;
    break;
    
    case "T60Z":
      l_aasrc.src = T60z;
    break;
    
    case "M3Lee":
      m_tanksrc.src = M3lee;
    break;
    
    case "BT5":
      l_tanksrc.src = BT5;
    break;
    
    case "I165":
      l_fightersrc.src = I165;
    break;
    
    case "Veroche":
      l_tanksrc.src = Veroche;
    break;
    

    case "bis":
      h_tanksrc.src = Bis;
    break;
    
    case "Hs129":
      h_attackersrc.src = Hs129;
    break;
    
    case "Hurricane_Mk1":
      l_fightersrc.src = Hurricane;
    break;
    
    case "SU26":
      l_cannonsrc.src = Su26;
    break;
    
    case "M8":
      l_cannonsrc.src = M8;
    break;
    
    case "LaGG3":
      l_fightersrc.src = Lagg3;
    break;
    
    case "Malda2":
      l_tdsrc.src = Malda;
    break;
    
    case "Marfusha":
      l_tanksrc.src = Marfusha;
    break;
    
    case "Laica":
      h_tanksrc.src = Laica;
    break;
    
    case "Albina":
      l_tdsrc.src = Albina;
    break;

    case "Strelka":
      l_fightersrc.src = Strelka;
    break;
    

    case "Bion":
      l_tdsrc.src = Bion;
    break;
    

    case "Felicette":
      h_tdsrc.src = Felicette;
    break;

    case "Hachiroku":
      h_tanksrc.src = Hachiroku;
    break;
    

    case "Belka":
      l_attackersrc.src = Belka;
    break;
    
    case "Claire":
      h_tanksrc.src = Claire;
    break;
    
    case"Ahat":
      h_tanksrc.src = ahatFull;
    break;

    case"B4":
     h_cannonsrc.src = B4full;
    break;

    case "Aircraft11":
      h_bombersrc.src = Aircraft11
    break;

    case "Chito":
      h_tanksrc.src = ahatFull
    break;
  }

    insertpassiveNames.forEach(name=>{    
      const passiveid = name.dataset.passname;
      name.innerText = "";  
      let passivenames;

      switch (id) {
        case "Maus":
          passivenames =  Array.from(Dolls.maus.passives).map(p=>p.name);
          for (let i = 0; i < passiveid; i++) {
            name.innerText = passivenames[i]
           }  
         break;

         case "Marfusha":
          passivenames =  Array.from(Dolls.Marfusha.passives).map(p=>p.name);
          for (let i = 0; i < passiveid; i++) {
            name.innerText = passivenames[i]
           }  
         break;
 
         case "Aircraft11":
           passivenames =  Array.from(Dolls.Aircraft11.passives).map(p=>p.name);
           for (let i = 0; i < passiveid; i++) {
             name.innerText = passivenames[i]
           }  
         break;

         case "JagdTiger":
          passivenames =  Array.from(Dolls.Jagd_Tiger.passives).map(p=>p.name);
          for (let i = 0; i < passiveid; i++) {
            name.innerText = passivenames[i]
          }  
        break;

        
        case "Hachiroku":
          passivenames =  Array.from(Dolls.Hachiroku.passives).map(p=>p.name);
          for (let i = 0; i < passiveid; i++) {
            name.innerText = passivenames[i]
          }  
        break;
         

         case "B4":
          passivenames =  Array.from(Dolls.B4.passives).map(p=>p.name);
          for (let i = 0; i < passiveid; i++) {
            name.innerText = passivenames[i]
          }  
        break;
       
         case "Ahat":
           passivenames =  Array.from(Dolls.Ahat.passives).map(p=>p.name);
           for (let i = 0; i < passiveid; i++) {
            name.innerText = passivenames[i]
           }  
         break;
        }
    })

    insertSkillNames.forEach(name=>{    
      const skillname = name.dataset.skillname;
      name.innerText = "";  

      switch (id) {
       case "Maus":
         const getmaus = Dolls.maus.unique_skill.map(n=>n.name);
         for (let i = 0; i < skillname; i++) {
           name.innerText = getmaus
          }  
        break;

        case "Marfusha":
          const getmarfusha = Dolls.Marfusha.unique_skill.map(n=>n.name);
          for (let i = 0; i < skillname; i++) {
            name.innerText = getmarfusha
           }  
         break;

        case "B4":
         const getb4 = Dolls.B4.unique_skill.map(n=>n.name);
         for (let i = 0; i < skillname; i++) {
           name.innerText = getb4
          }  
        break;

        case "Aircraft11":
          const geta11 = Dolls.Aircraft11.unique_skill.map(n=>n.name);
          for (let i = 0; i < skillname; i++) {
            name.innerText = geta11
          }  
        break;

        case "JagdTiger":
          const getjtiger = Dolls.Jagd_Tiger.unique_skill.map(n=>n.name);
          for (let i = 0; i < skillname; i++) {
            name.innerText = getjtiger
          }  
        break;

        case "Hachiroku":
          const gethachiroku = Dolls.Hachiroku.unique_skill.map(n=>n.name);
          for (let i = 0; i < skillname; i++) {
            name.innerText = gethachiroku
          }  
        break;
      
        case "Ahat":
          const getahat = Dolls.Ahat.unique_skill.map(n=>n.name);
          for (let i = 0; i < skillname; i++) {
           name.innerText = getahat
          }  
        break;
       }
    })
    
    insertaffects.forEach(affect=>{
      const passiveid  = affect.dataset.passiveid;
      const skillcount = affect.dataset.skillcount;
      affect.innerText = "";
      let p_affects;
      let s_affects;

    /**
     * LEFT Off here, 
     * fixed up logic for skill,name,passive inserts,
     * also fixed up jobswap when clicking other doll,
     * now just need to fix the div inserter to only do specified amount andno more.
     * after that all is done and need to just fill in info.
     * 
     * **/

    //PASSIVE & Active affect inserts
        switch (id) {
          case "Maus":
            p_affects =  Array.from(Dolls.maus.passives).map(p=>p.affect);
            for (let i = 0; i < passiveid; i++) {
             affect.innerText = p_affects[i]
            }  

            s_affects =  Array.from(Dolls.maus.unique_skill).map(p=>p.affect);
            for (let i = 0; i < skillcount; i++) {
             affect.innerText = s_affects
             createDivs(1,skillcount)
             inserted = true
            }  
          break;

          case "Marfusha":
            p_affects =  Array.from(Dolls.Marfusha.passives).map(p=>p.affect);
            for (let i = 0; i < passiveid; i++) {
             affect.innerText = p_affects[i]
            }  

            s_affects =  Array.from(Dolls.Marfusha.unique_skill).map(p=>p.affect);
            for (let i = 0; i < skillcount; i++) {
             affect.innerText = s_affects
             createAirDivs(6,skillcount)
             inserted = true
            }  
          break;

          case "Aircraft11":
            p_affects =  Array.from(Dolls.Aircraft11.passives).map(p=>p.affect);
            for (let i = 0; i < passiveid; i++) {
             affect.innerText = p_affects[i]
            }  

            s_affects =  Array.from(Dolls.Aircraft11.unique_skill).map(p=>p.affect);
            for (let i = 0; i < skillcount; i++) {
             affect.innerText = s_affects
             createDivs(3,skillcount)
             inserted = true
            }  
          break;

          case "JagdTiger":
            p_affects =  Array.from(Dolls.Jagd_Tiger.passives).map(p=>p.affect);
            for (let i = 0; i < passiveid; i++) {
             affect.innerText = p_affects[i]
            }  

            s_affects =  Array.from(Dolls.Jagd_Tiger.unique_skill).map(p=>p.affect);
            for (let i = 0; i < skillcount; i++) {
             affect.innerText = s_affects
             createDivs(2,skillcount)
             inserted = true
            }  
          break;

          case "Hachiroku":
            p_affects =  Array.from(Dolls.Hachiroku.passives).map(p=>p.affect);
            for (let i = 0; i < passiveid; i++) {
             affect.innerText = p_affects[i]
            }  

            s_affects =  Array.from(Dolls.Hachiroku.unique_skill).map(p=>p.affect);
            for (let i = 0; i < skillcount; i++) {
             affect.innerText = s_affects
             createDivs(2,skillcount)
             inserted = true
            }  
          break;

          case "B4":
            p_affects =  Array.from(Dolls.B4.passives).map(p=>p.affect);
            for (let i = 0; i < passiveid; i++) {
             affect.innerText = p_affects[i]
            }  

            s_affects =  Array.from(Dolls.B4.unique_skill).map(p=>p.affect);
            for (let i = 0; i < skillcount; i++) {
             affect.innerText = s_affects
             createDivs(3,skillcount)
             inserted = true
            }  
          break;

          case "Ahat":
            p_affects =  Array.from(Dolls.Ahat.passives).map(p=>p.affect);
            for (let i = 0; i < passiveid; i++) {
             affect.innerText = p_affects[i]
            }  

            s_affects =  Array.from(Dolls.Ahat.unique_skill).map(p=>p.affect);
            for (let i = 0; i < skillcount; i++) {
             affect.innerText = s_affects
             createDivs(3,skillcount)
             inserted = true
            }  
          break;
          default:
            affect.innerText = "";
          break;
        }
      })
  document.getElementById(doll).scrollIntoView({behavior: 'smooth'});
}


function Assign(collection){
  if(collection.className == "" || Skin_container.style === "display:inline-block"){
  collection.className = "skin_collection";
  skin_collection.style = "display:none";
  collection.style = "display:inline-block";
  Skin_container.style = "display:inline-block";
  Expanded.style = "display:none";
  collection.scrollIntoView({behavior: "smooth"})
  
  skin_closer.onclick = function(){
    Skin_container.style = "display:none"; 
    collection.style = "display:none";
    Expanded.style = "display:none";
    expanded_container.style = "display:none";   
  }
} else{
collection.style = "display:none";
Skin_container.style = "display:none";
skin_collection.style = "display:none"
expanded_container.style = "display:none";
Expanded.style = "display:none";
collection.className = "";
}
}Assign(collection_assignment)


function JobSwap(job){ 
  //may want to select id and close based on if id is open or not to fix both open "issue"
  if(job.className === "job_open"){
   job.className = "job_closed";
   return job.style = "display:none";
  }
  job.className = "job_open"
  job.style = "display:inline-block";
  job.scrollIntoView({behavior: "smooth"});
}


async function View(Expanded){
if(Expanded.className == ""){
Expanded.className = "Expanded";
await View("click",MouseEvent)
expanded_container.style = "display:inline-block";
Expanded.style = "display:inline-block";
Expanded.scrollIntoView({behavior: "smooth"})
}else{
Expanded.className = "";
Expanded.style = "display:none";
expanded_container.style = "display:none";
}}View(Expanded)





