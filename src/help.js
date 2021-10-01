const q = '```'
const y = '_'
const f = '*'
const c = '~'


const help = (prefix) => {
	return  `┌──「 *DVNŠKI BÔT* 」───
│
│ *Creator: Wildan (DANSKI)*
│ *Owner Bot: Wildan Mardiansyah*
│ *Nama Bot: DVNŠKI BOT*
│     
│
├──「 *MEDIA MENU* 」───
│
├ ${f}${prefix}sticker Reply img${f}
├ ${f}${prefix}rsticker Reply img${f}
├ ${f}${prefix}stickergif Reply video${f}
├ ${f}${prefix}stickerwa Query${f}
├ ${f}${prefix}stickerwm Nama|Author${f}
├ ${f}${prefix}nobg Reply img${f}
├ ${f}${prefix}textmaker teks atas|teks bawah${f}
├ ${f}${prefix}attp Text${f}
├ ${f}${prefix}ttp Text${f}
├ ${f}${prefix}tts (kode bahasa)${f}
├ ${f}${prefix}kodebahasa${f}
├ ${f}${prefix}take Nama|Author${f}
├ ${f}${prefix}exif Nama|Author${f}
├ ${f}${prefix}colong${f}
│
├──「 *MEDIA MENU2* 」───
│
├ ${f}${prefix}fdeface Url|title|desk${f}
├ ${f}${prefix}togif Reply stickergif${f}
├ ${f}${prefix}tovideo Reply sticker${f}
├ ${f}${prefix}toimg Reply sticker${f}
├ ${f}${prefix}toimg2 Reply sticker${f}
├ ${f}${prefix}nulis1${f}
├ ${f}${prefix}tulis2${f}
├ ${f}${prefix}asupan${f}
├ ${f}${prefix}tebakgambar${f}
├ ${f}${prefix}caklontong${f}
├ ${f}${prefix}tebakbendera${f}
├ ${f}${prefix}slot${f}
├ ${f}${prefix}slot2${f}
├ ${f}${prefix}suit${f}
│
├──「 *MEDIA MENU3* 」───
│
├ ${f}${prefix}bakarnama${f}
├ ${f}${prefix}textthumb${f}
├ ${f}${prefix}toko${f}
├ ${f}${prefix}jadwaltvnow${f}
├ ${f}${prefix}map${f}
├ ${f}${prefix}cuaca${f}
├ ${f}${prefix}infogempa${f}
├ ${f}${prefix}kbbi${f}
├ ${f}${prefix}shortlink${f}
├ ${f}${prefix}tourl${f}
│
├──「 *SOUND MENU* 」───
│
├ ${f}${prefix}sound1${f}
├ ${f}${prefix}sound2${f}
├ ${f}${prefix}sound3${f}
├ ${f}${prefix}sound4${f}
├ ${f}${prefix}sound5${f}
│
├──「 *OWNER MENU* 」───
│
├ ${f}${prefix}self${f}
├ ${f}${prefix}public${f}
├ ${f}${prefix}mute${f}
├ ${f}${prefix}unmute${f}
├ ${f}${prefix}runtime${f}
├ ${f}${prefix}ping${f}
├ ${f}${prefix}term${f}
├ ${f}${prefix}blocklist${f}
├ ${f}${prefix}run${f}
├ ${f}${prefix}chatlist${f}
├ ${f}${prefix}owner${f}
├ ${f}${prefix}join Linkgroup${f}
├ ${f}${prefix}getpic @tag${f}
├ ${f}${prefix}getbio @tag${f}
├ ${f}${prefix}setdesc${f}
├ ${f}${prefix}setname${f}
│
├──「 *OWNER MENU* 」───
│
├ ${f}${prefix}pin${f}
├ ${f}${prefix}unpin${f}
├ ${f}${prefix}archive${f}
├ ${f}${prefix}unarchiveall${f}
├ ${f}${prefix}readall${f}
├ ${f}${prefix}delthischat${f}
├ ${f}${prefix}shutdown${f}
├ ${f}${prefix}setppbot${f}
│
├──「 *TAG MENU* 」───
│
├ ${f}${prefix}hidetag Text${f}
├ ${f}${prefix}stctag Tag Stc${f}
├ ${f}${prefix}imgtag Tag Img${f}
├ ${f}${prefix}kontag Text${f}
├ ${f}${prefix}kontak 6281xxx Nama${f}
│
├──「 *OWNER MENU-1* 」───
│
├ ${f}${prefix}setthumb${f}
├ ${f}${prefix}setreply${f}
├ ${f}${prefix}setbodymenu${f}
├ ${f}${prefix}setwelcome${f}
├ ${f}${prefix}setleave${f}
├ ${f}${prefix}setpromote${f}
├ ${f}${prefix}setdemote${f}
│
├──「 *OWNER MENU-2* 」───
│
├ ${f}${prefix}upswtext${f}
├ ${f}${prefix}upswimg${f}
├ ${f}${prefix}upswvideo${f}
├ ${f}${prefix}block${f}
├ ${f}${prefix}unblock${f}
├ ${f}${prefix}delete${f}
│
├──「 *GROUP MENU* 」───
│
├ ${f}${prefix}welcome 1/0${f}
├ ${f}${prefix}linkgroup${f}
├ ${f}${prefix}group tutup/buka${f}
├ ${f}${prefix}add 6281xxx${f}
├ ${f}${prefix}kick @tag${f}
├ ${f}${prefix}promote @tag${f}
├ ${f}${prefix}demote @tagadmin${f}
├ ${f}${prefix}demoteall${f}
├ ${f}${prefix}edotensei @tag${f}
├ ${f}${prefix}listadmin${f}
├ ${f}${prefix}online${f}
├ ${f}${prefix}infoall${f}
├ ${f}${prefix}notif${f}
├ ${f}${prefix}leave${f}
│
├──「 *MAKER MENU* 」───
│
├ ${f}${prefix}ninjalogo nama1|nama2${f}
├ ${f}${prefix}halloweentext${f}
├ ${f}${prefix}cloudtext${f}
├ ${f}${prefix}phublogo${f}
├ ${f}${prefix}******${f}
├ ${f}${prefix}******${f}
│
├──「 *NSFW MENU* 」───
│
├ ${f}${prefix}hentai${f}
├ ${f}${prefix}blowjob${f}
├ ${f}${prefix}pussy${f}
├ ${f}${prefix}fox${f}
├ ${f}${prefix}masturbasi${f}
├ ${f}${prefix}panties${f}
├ ${f}${prefix}school${f}
├ ${f}${prefix}yuri${f}
├ ${f}${prefix}cum${f}
├ ${f}${prefix}cumsut${f}
├ ${f}${prefix}femdom${f}
├ ${f}${prefix}animewallpaper${f}
├ ${f}${prefix}dujin${f}
├ ${f}${prefix}segs${f}
│
├──「 *FUN MENU* 」───
│
├ ${f}${prefix}imo${f}
├ ${f}${prefix}quotes1${f}
├ ${f}${prefix}wallpaper${f}
├ ${f}${prefix}quotes2${f}
├ ${f}${prefix}cersex${f}
├ ${f}${prefix}cerpen${f}
├ ${f}${prefix}anime1${f}
├ ${f}${prefix}yuri${f}
├ ${f}${prefix}tongue${f}
├ ${f}${prefix}jadwalsholat${f}
├ ${f}${prefix}pantun${f}
├ ${f}${prefix}cuaca${f}
├ ${f}${prefix}anime${f}
│
├──「 *MENU LIST MEDIA* 」───
│
├ ${f}${prefix}addstik Optional${f}
├ ${f}${prefix}adimg Optional${f}
├ ${f}${prefix}addvid Optional${f}
├ ${f}${prefix}addvn Optional${f}
├ ${f}${prefix}getstik Query${f}
├ ${f}${prefix}getimg Query${f}
├ ${f}${prefix}getvid Query${f}
├ ${f}${prefix}getvn Query${f}
├ ${f}${prefix}liststick${f}
├ ${f}${prefix}listimg${f}
├ ${f}${prefix}listvid${f}
├ ${f}${prefix}listvn${f}
│
├──「 *MEDIA MENU* 」───
│ 
├ ${f}${prefix}reverse${f}
├ ${f}${prefix}slow${f}
├ ${f}${prefix}Fast${f}
├ ${f}${prefix}tomp3${f}
├ ${f}${prefix}bass${f}
│
├──「 *MENU DOWNLOADER* 」───
│
├ ${f}${prefix}play Query${f}
├ ${f}${prefix}play2 Query${f}
├ ${f}${prefix}igd Url${f}
├ ${f}${prefix}fb Url${f}
├ ${f}${prefix}tiktok Url${f}
├ ${f}${prefix}ytmp3 Url${f}
├ ${f}${prefix}ytmp4 Url${f}
├ ${f}${prefix}tiktok${f}
├ ${f}${prefix}tiktoknowm${f}
│
├──「 *THANKS TO* 」───
│ *-ALLAH SWT*
│ *-MHANKBARBAR*
│ *-ADI WAJSHING (Baileys)*
│ *-DVNŠKI*
│ *-ARMAN*
│ *-ZOBIN*
│ *-StevenTs*
│ *-Zitsraa*
│ *-Lindow*
│ *https://bît.ly/ŠVNŠ*
│ *https://bît.ly/DVNŠ*
│
└──「 _*DVNŠKI BÖT*_  」───`


}

exports.help = help
