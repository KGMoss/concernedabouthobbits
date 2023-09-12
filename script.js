let height = 16330;
let themeCategory;
let trackName;
let thisTrack;
let prevDuration;
let prevResponse;
var svg = d3.select("svg")
            .attr("width", window.innerWidth)
            .attr("height", height)
            .attr("overflow", "visible")
            
var div = d3.select("div")

var trackBox = div.selectAll("div").selectAll("div")
        .data(trackList).enter()
        // .insert("div",":first-child")
        .append("div")
        .attr("class", function (d)
        {
            return "trackBox " + d.index
        }
        )
        .attr("track", function (d)
        {   
            d3.select(this).html("<h3>" + d.index + ". " + d.name + "</h3>")
            thisTrack = d.name
            if (thisTrack== "Prologue: One Ring to Rule Them All")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The first theme heard in the trilogy is Lothlórien, immediately connecting the audience to the history of Middle-Earth and the One Ring. While Galadriel's narration gives us the history of the Ring's journey, Shore's thematic scoring gives us a glimpse of the journey ahead.")
        }
        if (thisTrack == "The Shire")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("We are introduced to the stepwise motion, futes, and fiddles of The Shire. In addition, the Fellowship theme is heard over the title card.")
        }
        if (thisTrack == "Bag End")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("After a whistle's rendition of the Shire theme, Gandalf (Ian McKellen) sings Tolkien's <q>The Road Goes Ever On</q> to a melody composed by Fran Walsh. This is the only deviation from Shire material in the whole track!")
        }
        if (thisTrack == "Very Old Friends")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The Shire material continues as Bilbo reveals his plans to leave it. Gandalf and Bilbo oversee party preparations and the hobbit's whistle returns. ")
        }
        if (thisTrack == "Flaming Red Hair")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("This track, heard in the pub, was composed by Plan 9, rather than Shore. It was played during filming, then made it into the final cut. This track is diegetic, meaning it occurs within the story.")
        }
        if (thisTrack == "Farewell Dear Bilbo")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("More Shire material, coupled with the mischievous Hobbit figures that will later become the Hobbit's Antics, and are often found wherever Merry and Pippin are.")
        }
        if (thisTrack == "Keep It Secret, Keep It Safe")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Peaceful Shire themes are rudely interrupted by the music of Middle Earth at large, clueing the audience in to the journey that awaits our Hobbits. Interestingly, the first usage of <i>The Pity of Gollum</i> here pairs with Bilbo's reluctance to let go of the Ring, further tying Bilbo's story (and, importantly, the Ring's story) to Gollum. The Pity of Gollum is heard on clarinet, rather than the typical english horn, adding a Hobbit flair to the theme. This track covers Gollum's interrogation, as well as Gandalf's arrival at Minas Tirith. This track's darkness is only abated by Merry and Pippin's rendition of Walsh's <q>Drinking Song </q>")
        }
        if (thisTrack == "A Conspiracy Unmasked")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Shire material hints at <i>The Seduction of the Ring</i> as Frodo examines his destroyed home. As Gandalf confirms the ring's secret, the score is thrown into darkness, Mordor material ringing out unsettlingly. This darkness builds, calling up Gollum's story and the tragedy the Ring leaves in its wake, but the track is steadied by Frodo's resolve, as the Hobbit decides to carry the ring.")
        }
        if (thisTrack == "Three is Company")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The camera focuses ominously on the Ring, and we hear <i>The Seduction of the Ring</i> for the first time. Sam ventures farther than he's ever been from home, and we hear a hint of <i>In Dreams</i>. With the journey finally begun, the <i>Fellowship</i> theme rings out bravely.")
        }
        if (thisTrack == "The Passing of the Elves")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Another piece from Plan 9! This track adapts Tolkien's text <q>The Elvish Lament</q> for the Elves leaving for Valinor.")
        }
        if (thisTrack == "Saruman the White")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("After a statement of the <i>Shire</i> theme, Gandalf takes off for Orthanc to dark <i>Fellowship</i> variations. This theme clusters in ways that almost resemble Mordor material, which Gandalf is greeted by when he arrives. These thematic warnings are soon realized, as Saruman's true allegiance is revealed.")
        }
        if (thisTrack == "A Shortcut to Mushrooms")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Merry and Pippin's jaunty <i>Shire</i> themes accompany them through the Shire's fields. This, however, is overtaken by the themes that accompany the Ringwraiths' presence, as they try to hunt the hobbits down.")
        }
        if (thisTrack == "Strider")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("As the Hobbits find the Prancing Pony, attempts at Hobbit themes try to establish themselves. We hear a half-speed version of the <i>skip-beat</i>, before Mordor material takes over as Pippin reveals Frodo's name and slips the Ring on.")
        }
        if (thisTrack == "The Nazgûl")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Mordor's themes cluster together as the Ringwraiths seek out Frodo. The <i>Fellowship</i> theme emerges, finally with a fuller orchestration, but still slow. The Fellowship is still establishing itself. As Aragorn sets up camp. he sings <q>The Song of Luthien</q>, text by Tolkien, Sindarin translation by David Salo, and melody composed and performed by Viggo Mortenson.")
        }
        if (thisTrack == "Weathertop")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Frodo is captured by the Ringwraiths at Weathertop, their theme starting out whispered, then crescendoing throughout the struggle. Frodo again wears the Ring, and the <i>Footsteps of Doom End Cap</i> sounds, its two-note phrase referencing the same rhythm in the <i>Ringwraith</i> theme.")
        }
        if (thisTrack == "The Caverns of Isengard")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("As Aragorn intercept's the Wraith, so does his (Strider's) theme. However, the foreboding, almost infectious <i>Five Beat pattern</i> lurks. The purpose of this motif is made clear, as we see the factories of Isengard. In opposition to this, however, is the ever-hopeful <i>Nature's Reclamation, signifying rebellion</i>.")
        }
        if (thisTrack == "Give Up the Halfling")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("<i>Arwen Revealed</i> introduces Arwen Undómiel to both Frodo and the audience. As Arwen rides to Rivendell with Frodo, she is pursued by the <i>Mordor Skip-Beat</i>. This track includes female chorus, typical of Elvish music. But, in addition to <i>The Song of Lúthien</i>, sung in Sindarin, Arwen's prayer is also sung, this time in English/Common")
        }
        if (thisTrack == "Orthanc")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Frodo wakes up in Rivendell. <i>Nature's Reclamation</i> once again tempers the mechanical Isengard music.")
        }
        if (thisTrack == "Rivendell")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("After a brief Hobbit melody, the beautifully haunting arpeggios of the Rivendell theme take over the score. This matches Rivendell's elegance. Female choir, the voice of the Elves, sings <q>Hymn to Elbereth</q>. The Hobbit melody returns, now in the strings. Despite the prevalent Shire material, we hear none of the Shire instrumentation, as Rivendell is characterized by a more elegant, orchestral sound than the Shire.")
        }
        if (thisTrack == "The Sword That Was Broken")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Rivendell's arpeggios take center stage, the Weakness and Redemption motif hidden inside them coming to light. As Boromir cuts his finger on the Shards of Narsil, <i>Evil Times</i> foreshadows his fate.")
        }
        if (thisTrack == "The Council of Elrond Assembles")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The lack of thematic material here does not signify a lack of music, but rather the rare appearance of non-Shore material. Enya's Aníron (Theme For Aragorn and Arwen) is featured in this track. This piece, sung in Sindarin, highlights Aragorn and Arwen's relationship. Another notable moment in this track is the appearance of the <i>Descending Third</i> as the Ring takes hold of Boromir.")
        }
        if (thisTrack == "The Great Eye")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("This track features the only full statement of <i>Gondor</i> in FOTR, and is used to tie Boromir to Gondor and its history. Discussion of the destruction of the Ring brings about Mordor's dark melodies, which are only silenced by Frodo's decision to take the Ring to Mordor. The music turns gentler for a moment, and hints at the <i>Fellowship</i> theme. With the Hobbits joining the Fellowship as well, we hear some <i>Shire</i> material on the whistle, followed by a full statement of the <i>Fellowship</i> theme.")
        }
        if (thisTrack == "Gilraen's Memorial")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Here, we hear the first use of <i>The Diminishment of the Elves</i>, set to Gilraen's Song, heard in Sindarin. As the Fellowship sets out for Mordor, there's a sort of maturing of themes we've heard before. The <i>Shire</i> theme returns, but this time on clarinet and oboe, which is even followed by a heroic rendition of the theme on french horn. Similarly, the Fellowship's down-and-back figure is explored, and the track ends with a powerful rendition of the theme. The last minute or so of this track captures some of the most epic aspects of the LOTR scores.")
        }
        if (thisTrack == "The Pass of Caradhras")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Playful Hobbit material turns dark as the crebain soar overhead. The weight of the quest is further underscored by the first appearance of <i>Dangerous Passes</i>, as well as the presence of the <i>Seduction of the Ring</i>, finally heard in its typical boys' choir setting. As the Ring falls into Boromir's grasp, the score pleads along with Aragorn as he asks him to return it to Frodo. The Fellowship decides to pass through Moria, a decision that is accompanied by hints of Dwarven music.")
        }
        if (thisTrack == "The Doors of Durin")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("We hear the first true statement of the Moria theme, as well as <i>An Elvish Pledge</i>, set to <i>Gandalf at the Door to Moria</i>, heard in Sindarin. This track is mostly characterized by the unsettling aleatoric music that accompanies the Watcher in the Water. This is one of the major encounters the Fellowship has with a monster of some sort, and the fact that this entire sequence is mostly aleatoric distinguishes it from the others.")
        }
        if (thisTrack == "Moria")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("This track features <i>Durin's Song</i>, a Khuzdul choral piece. The harsh sounds of low voices and percussion mimic the harsh consonants of the Khuzdul language. The music featured here, and in the entire Moria sequence, is some of the most lifeless in the whole trilogy.")
        }
        if (thisTrack == "Gollum")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Gollum has been stalking the Fellowship, a fact that comes to light as the group traverses Moria. <i>The Pity of Gollum</i> has real significance here, highlighting the way Frodo (and the audience) feels for the pathetic creature. In addition, it plays into Frodo's connection to Gollum, which is further solidified by the presence of <i>A Hobbit's Understanding</i> later in the track, as Frodo takes in Gandalf's warning about deciding who lives and who dies.")
        }
        if (thisTrack == "Balin's Tomb")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("This track begins with a slow, dramatic build of the <i>Dwarrowdelf</i> theme, hinting at the greatness this place used to exemplify. Fellowship-adjacent themes erupt as Frodo's sword begins to glow blue, signifying the presence of Orcs. But instead of using flashy musical cues, as goblins burst through the door, Shore lets the music drop out entirely. The Fellowship is spurred to action, triumphing over the first wave of Orcs and the cave troll, but it is barely granted a moment of musical glory before <i>Evil Times</i> takes the reins. More Orcs move to attack, accompanied by the ever-present <i>Five-Beat Pattern</i>, but a heroic rendition of the Fellowship theme rings proudly. This is the only time the full Fellowship is called to battle, and that's reflected musically.")
        }
        if (thisTrack == "Khazad-Dûm")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The Fellowship’s journey from Moria turns even darker, and with it, so does the music.The choir heard at the beginning of this track features “grunters”, Maori rugby players serving as vocalists. Also heard here are dissonant low brass figures and a statement of <i>The Dark Places of the World</i>. The balrog has awoken, and the music grows in intensity, until finally the bridge of Khazad-Dûm crumbles, and Gandalf and the Balrog fall out of sight. The score quiets here, allowing the characters and audience to mourn Gandalf, and we are presented with the <i>Gandalf’s Farewells</i> figure. ")
        }
        if (thisTrack == "Caras Galadhon")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The Fellowship enters Lothlórien, and we hear the <i>Lóthlorien</i> theme, the theme that opened the film, once more. Accompanied by female choir, the Elves lead the Fellowship to Caras Galadhon and meet Galadriel. The score gains urgency as Galadriel senses the ring, but once again quiets as the elves sing the haunting <q>Lament For Gandalf</q>. ")
        }
        if (thisTrack == "The Mirror of Galadriel")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("This iconic scene is matched musically. As Frodo peers through the mirror, Shore creates a tapestry of Middle-Earth’s music, including themes associated with the Elves, Mordor, and the Ring. These layers create a chaotic frenzy of sound that dissipates as Frodo pulls away. The score serves as a warning as Galadriel is called to the Ring, but the moment passes, and with relief, <i>The Journey There</i> signifies a return to thematic material, and we hear the <i>Lóthlorien</i> theme, the theme that opened the film, once more. Accompanied by female choir, the Elves lead the Fellowship to Caras Galadhon and meet Galadriel. The score gains urgency as Galadriel senses the ring, but once again quiets as the elves sing the haunting <i>Lament For Gandalf</i>. ")
        }
        if (thisTrack == "The Fighting Uruk-hai")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The dark, metallic feel of the Orc material returns as the Uruk-hai move to attack the Fellowship. This eases for a subdued Fellowship theme and a Hobbity whistle as Merry and Pippin eat the Lembas Bread. With a few more variations on their theme, the Fellowship is off to continue their journey. Later in the track, Aragorn informs the Fellowship of Gollum’s presence, earning a bassoon rendition of <i>The Pity of Gollum</i>. This quiet moment allows for the clarinet to sing of the Shire, as the Fellowship is faced with uncertainty, both regarding their quest and musically. Morning arrives, and the Fellowship continues along the river Choir sings <q>Elessar’s Oath</q>. The Fellowship passes through the statues of the Argonath, accompanied by a dramatic statement of <i>The History of the Ring</i>.")
        }
        if (thisTrack == "Parth Galen")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Boromir attempts to steal the Ring, a conflict that is marked by the battling <i>Mordor</i> and <i>Hobbit Skip-Beats</i>. Boromir’s weakness is marked by <i>The Fall of Men</i>, while the consequences of Frodo’s decision to don the ring are made evident by the way the score twists into a haze of vicious Mordor material. Aragorn appears, and though <i>The Seduction of the Ring</i> tempts him, he resists, allowing Frodo to continue carrying the burden, silencing the theme. Frodo is not able to catch even a moment’s reprieve, as Sting reveals that there are Orcs about. Aragorn’s bravery here earns him a heroic statement of his theme. Grating Orc music takes over the score as the creatures attack, and Boromir is slain.")
        }
        if (thisTrack == "The Departure of Boromir")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Strings swell solemnly before being joined by a mourning boys choir. The <i>Noble End</i> melody is set to <q>The Death of Boromir</q>, heard in both Sindarin and Quenya. The score picks up as Aragorn attempts to save Boromir, but is soon mellowed as it is realized that Boromir is beyond saving. The Fellowship sadly surveys the destruction of battle, and are met with a disheartened rendition of their theme. The down-and-back again shape is present, but with none of the fanfare or embellishment that accompanied them in Moria.")
        }
        if (thisTrack == "The Road Goes Ever On... Pt. 1")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("Frodo decides to set off alone, earning him a heartfelt, matured setting of several Shire themes. These themes that were once characterized by the naivety and innocence of the hobbits now have a new depth and emotion to them. Even the whistle, the peak of the hobbits innocence, takes on a new, more moving role here. The Three Hunters elect to go after Merry and Pippin, and we hear the <i>Fellowship</i> theme. Despite the darkness, the Fellowship will carry on.")
        }
        if (thisTrack == "May It Be")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("This is the only track without thematic material, and for a good reason. Enya’s <i>May It Be</i> plays over FOTR’s end credits, and is, of course, composed by Enya, rather than Shore. It contains lyrics in both English/Common and Quenya. The lyrics here provide a little bit of hope for the journey to come.")
        }
        if (thisTrack == "The Road Goes Ever On... Pt. 2")
        {
            d3.select(this)
            .append("p")
            .attr("class", "trackText")
            .html("The Shire material finally develops into the <i>In Dreams</i> melody heard here. The rolling <i>Hymn Setting</i> chords create a poignant end to the film, and, with a last bit of innocence, boys' choir intones the wistful lyrics of <q>In Dreams</q>. <br> <br> <p class = lyric> <i>I will go there<br>And back again</i></p><br>With a heroic flourish and the last statement of the <i>Fellowship</i> theme, FOTR is brought to an end.")
        }
            return d.name
            })
            .attr("duration", function (d)
            {   d3.select(this)
            return d.duration
            })
            .style("top", function (d)
            {
            return d.prevduration*1.499 +30 + "px"
            })
        



//i feel like i need to use the previous duration to set the y value of these guys, but idk how

var tooltip = d3.select('div')
        .append("div")
        .attr("class", "tooltip")
        .html("<h3> Hover over a bubble to view info about a theme! </h3>")

// function highlightSimilar(myData)
// {
//     d3.select(dataviz)
//         if (d.theme == thisThemeCategory)
//         {
//             d3.select.this.attr("class", "highlighted")
//         }
// }

              
var dataviz= svg.selectAll("circle")
                .data(myData).enter()
                .append("circle")
                .attr("r", function(d){
                    return Math.sqrt(d.length)/Math.PI*15
                })
                .attr("trackName", function (d)
                {
                    return d.track
                })
                .attr("class", function (d)
                {
                    d3.select(this)
                    themeCategory = d.themecategory
                    themeCategory = themeCategory.replace(/\s+/g, '')
                    trackName = d.track
                    trackName = trackName.replace(/\s+/g, '')
                    return themeCategory + " " + trackName
                }
                 )
                 .attr("index", function (d) {
                    return d.index
                 })
                .classed("notHighlighted", true)
                .attr("left", window.innerWidth/2)
                .attr("cx", function(d) {
                    if (d.index%2 ==0)
                    {
                        return window.innerWidth/2 + Math.sqrt(d.length)/Math.PI*25;
                    }
                    else
                    {
                        return window.innerWidth/2 - Math.sqrt(d.length)/Math.PI*25;
                    }
                })
                .attr("cy", function(d) {
                        let yVal = (d.endtime+d.starttime)/2
                         return yVal*1.5+30;
                })
                // .attr("fill", function(d) {
                //     return d.color
                // })
                .attr("fill", function (d) {
                    if (d.themecategory == "The One Ring")
                    {
                        return "#F49F0A"
                    }
                    if (d.themecategory == "The Shire and the Hobbits")
                    {
                        return "#309A45"
                    }
                    if (d.themecategory == "Gollum")
                    {
                        return "#33658A"
                    }
                    if (d.themecategory == "The Elves")
                    {
                        return "#AD95C6"
                    }
                    if (d.themecategory == "The Dwarves")
                    {
                        return "#69626D"
                    }
                    if (d.themecategory == "Rohan")
                    {
                        return "#F8C389"
                    }
                    if (d.themecategory == "Gondor")
                    {
                        return "#ff8a7e"
                    }
                    if (d.themecategory == "The Fellowship of the Ring")
                    {
                        return "#770058"
                    }
                    if (d.themeCctegory == "The Monsters of Middle-Earth")
                    {
                        return "#0892A5"
                    }
                    if (d.themecategory == "Isengard and the Orcs")
                    {
                        return "#b4bfb1"
                    }
                    if (d.themecategory == "Mordor")
                    {
                        return "#BF3100"
                    }
                    if (d.themecategory == "The Ents")
                    {
                        return "#2D1012"
                    }
                    if (d.themecategory == "Nature")
                    {
                        return "#3D3522"
                    }
                    if (d.themecategory == "Middle-Earth")
                    {
                        return "#143642"
                    }
                    if (d.themecategory == "Diegetic")
                    {
                        return "#808080"
                    }
                })
                
                .on('mouseover', function (d) {
                    d3.select(this)
                        .classed("highlighted", true)
                        .classed("notHighlighted", false)
                        .attr("r", function(d){
                            return Math.sqrt(d.length)/Math.PI*15-3
                        })
                        let currentTheme=d.theme
                    tooltip
                        .html("<h3>" + d.theme + "</h3>" + "<p class>" + d.themecategory + "</p>" + "<p class = time>" + d.starttimemincomponent + ":" + d.starttimeseccomponent + "-"+ d.endtimemincomponent + ":" + d.endtimeseccomponent+ "</p> <br>")
                        console.log("currentTheme"+currentTheme)
                        // if (currentTheme== "Lothlórien")
                        // {
                        //     tooltip
                        //     .append("p")
                        //     .attr("class", "themeText")
                        //     .html("something something lothlorien")
                        // }
                        // if (currentTheme== "The History of the Ring")
                        // {
                        //     tooltip
                        //     .append("p")
                        //     .attr("class", "themeText")
                        //     .html("something something history of the ring")
                        // }
                        // .style("left", (d3.mouse(this)[0]+30) + "px")
                        // .style("top", (d3.mouse(this)[1]+100) + "px")
                        console.log("show tooltip")
                    d3.select(this)
                       let thisThemeCategory=d.themecategory.replace(/\s+/g, '')
                    d3.selectAll(svg)
                        console.log("cat comparing to" + thisThemeCategory)
                        for ( i = 0; i<myData.length; i++)
                        {
                            console.log("i" + i)
                            if (myData[i].themecategory.replace(/\s+/g, '')==thisThemeCategory)
                            {
                                let dotCat = "." + thisThemeCategory
                                    d3.selectAll(dotCat)
                                        .classed("highlighted", true)
                                        .classed("notHighlighted", false)
                                        .attr("r", function(d){
                                            return Math.sqrt(d.length)/Math.PI*15-3;
                                        })
                            }
                            console.log(myData[i].themecategory.replace(/\s+/g, '')==thisThemeCategory)
                        }
                   
                   
                    
                })

                //d3.selectAll

                .on('mouseout', function (d) {
                    d3.select(this)
                    .classed("highlighted", false)
                    .classed("notHighlighted", true)
                    .attr("r", function(d){
                        return Math.sqrt(d.length)/Math.PI*15
                    })
                    tooltip
                        .html("")
                    // tooltip
                    //     .style("opacity", 0)
                    console.log("hide tooltip")
                    d3.selectAll("circle")
                        .classed("highlighted", false)
                        .classed("notHighlighted", true)
                        .attr("r", function(d){
                            return Math.sqrt(d.length)/Math.PI*15
                        })
                });

let dashes = svg.selectAll("line")
        .data(trackList).enter()
        .append("line")
        .attr("class", "dash")
        .attr("x1", window.innerWidth/2-15)
        .attr("y1", function (d){
            console.log (d.duration)
            let duration = d.duration*1.5+30
            return duration
        })
        .attr("x2", window.innerWidth/2+15)
        .attr("y2", function (d){
            let duration = d.duration*1.5+30
            return duration
        })

let centerLine = 
    svg.append("line")
        .attr("class", "centerLine")
        .attr("x1", window.innerWidth/2)
        .attr("y1", 0)
        .attr("x2", window.innerWidth/2)
        .attr("y2", height)

    svg.append("circle")
        .attr("r", 8)
        .attr("cx", window.innerWidth/2)
        .attr("cy", 0)
        .attr("class", "centerLine")
        .classed("highlighted", false)

     svg.append("circle")
        .attr("r", 8)
        .attr("cx", window.innerWidth/2)
        .attr("cy", height)
        .attr("class", "centerLine")
        .classed("highlighted", false);

console.log(trackBox.parentElement)



// var scroller = scrollama();

// function handleStepEnter(response)
// {
//     console.log(response)
//     console.log("enter")
//     // response.element.style.opacity=1
// }

// function handleStepExit(response)
// {
//     console.log(response.direction + "Dir")
//    if (response.direction == 'up')
//    {
//     console.log("here")
//     // response.element.style.opacity=0
//    }
// }

// scroller.setup({
//     step: ".trackBox",
//     offset: 0.67,
// })
// .onStepEnter(handleStepEnter)
// .onStepExit(handleStepExit)
