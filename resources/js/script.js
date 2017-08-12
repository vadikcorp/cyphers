$(function() {

	// --------------content jquery hide/show
	   $(".content").hide();
	   $(".content1").show();


	 $(".button1").click(function(){
	 $(".content").hide();
	  $(".content2").show();
		$('#wrapper').css({'height':'2425px'});


	  $("#findtext").html($(".test1").val());

	 });

	 $(".button2").click(function(){
	 $(".content").hide();
	 $(".content3").show();
	 $('#wrapper').css({'height':'1250px'});

	});

	$(".button3").click(function(){
	$(".content").hide();
	$(".content4").show();
	$('#wrapper').css({'height':'2225px'});
	});


	$(".button4").click(function(){
	$(".content").hide();
	$(".content5").show();
	$('#wrapper').css({'height':'2025px'});
	});

	// -------------default text
		$(".default").click(function(){
			$("#text1").val("IT INTRODUCED A RADICALLY NEW METHOD OF DISTRIBUTING CRYPTOGRAPHIC KEYS, WHICH WENT FAR TOWARD SOLVING ONE OF THE FUNDAMENTAL PROBLEMS OF CRYPTOGRAPHY, KEY DISTRIBUTI ON, AND HAS BECOME KNOWN AS DIFFIE-HELLMAN KEY EXCHANGE. THE ARTICLE ALSO STIMULATED THE ALMOST IMMEDIATE PUBLIC DEVELOPMENT OF A NEW CLASS OF ENCIPHERING ALGORITHMS, THE ASYMMETRIC KEY ALGORITHMS. PRIOR TO THAT TIME, ALL USEFUL MODERN ENCRYPTION ALGORITHMS HAD BEEN SYMMETRIC KEY ALGORITHMS, IN WHICH THE SAME CRYPTOGRAPHIC KEY IS USED WITH THE UNDERLYING ALGORITHM BY BOTH THE SENDER AND THE RECIPIENT, WHO MUST BOTH KEEP IT SECRET. ALL OF THE ELECTROMECHANICAL MACHINES USED IN WWII WERE OF THIS LOGICAL CLASS, AS WERE THE CAESAR AND ATBASH CIPHERS AND ESSENTIALLY ALL CIPHER SYSTEMS THROUGHOUT HISTORY. THE 'KEY' FOR A CODE IS, OF COURSE, THE CODEBOOK, WHICH MUST LIKEWISE BE DISTRIBUTED AND KEPT SECRET, AND SO SHARES MOST OF THE SAME PROBLEMS IN PRACTICE. OF NECESSITY, THE KEY IN EVERY SUCH SYSTEM HAD TO BE EXCHANGED BETWEEN THE COMMUNICATING PARTIES IN SOME SECURE WAY PRIOR TO ANY USE OF THE SYSTEM THE TERM USUALLY USED IS 'VIA A SECURE CHANNEL' SUCH AS A TRUSTWORTHY COURIER WITH A BRIEFCASE HANDCUFFED TO A WRIST, OR FACE-TO-FACE CONTACT, OR A LOYAL CARRIER PIGEON. THIS REQUIREMENT IS NEVER TRIVIAL AND VERY RAPIDLY BECOMES UNMANAGEABLE AS THE NUMBER OF PARTICIPANTS INCREASES, OR WHEN SECURE CHANNELS AREN'T AVAILABLE FOR KEY EXCHANGE, OR WHEN, AS IS SENSIBLE CRYPTOGRAPHIC PRACTICE, KEYS ARE FREQUENTLY CHANGED.THE AGING DES WAS OFFICIALLY REPLACED BY THE ADVANCED ENCRYPTION STANDARD AES IN- WHEN NIST ANNOUNCED FIPS. AFTER AN OPEN COMPETITION, NIST SELECTED RIJNDAEL, SUBMITTED BY TWO BELGIAN CRYPTOGRAPHERS, TO BE THE AES. DES, AND MORE SECURE VARIANTS OF IT SUCH AS TRIPLE DES, ARE STILL USED TODAY, HAVING BEEN INCORPORATED INTO MANY NATIONAL AND ORGANIZATIONAL STANDARDS. HOWEVER, ITS X-BIT KEY-SIZE HAS BEEN SHOWN TO BE INSUFFICIENT TO GUARD AGAINST BRUTE FORCE ATTACKS ONE SUCH ATTACK, UNDERTAKEN BY THE CYBER CIVIL-RIGHTS GROUP ELECTRONIC FRONTIER FOUNDATION IN-, SUCCEEDED IN- HOURS. AS A RESULT, USE OF STRAIGHT DES ENCRYPTION IS NOW WITHOUT DOUBT INSECURE FOR USE IN NEW CRYPTOSYSTEM DESIGNS, AND MESSAGES PROTECTED BY OLDER CRYPTOSYSTEMS USING DES, AND INDEED ALL MESSAGES SENT SINCE USING DES, ARE ALSO AT RISK. REGARDLESS OF DES' INHERENT QUALITY, THE DES KEY SIZE WAS THOUGHT TO BE TOO SMALL BY SOME EVEN IN-, PERHAPS MOST PUBLICLY BY WHITFIELD DIFFIE. THERE WAS SUSPICION THAT GOVERNMENT ORGANIZATIONS EVEN THEN HAD SUFFICIENT COMPUTING POWER TO BREAK DES MESSAGES; CLEARLY OTHERS HAVE ACHIEVED THIS CAPABILITY.THE SECOND DEVELOPMENT, IN-, WAS PERHAPS EVEN MORE IMPORTANT, FOR IT FUNDAMENTALLY CHANGED THE WAY CRYPTOSYSTEMS MIGHT WORK. THIS WAS THE PUBLICATION OF THE PAPER NEW DIRECTIONS IN CRYPTOGRAPHY BY WHITFIELD DIFFIE AND MARTIN HELLMAN. IT INTRODUCED A RADICALLY NEW METHOD OF DISTRIBUTING CRYPTOGRAPHIC KEYS, WHICH WENT FAR TOWARD SOLVING ONE OF THE FUNDAMENTAL PROBLEMS OF CRYPTOGRAPHY, KEY DISTRIBUTION, AND HAS BECOME KNOWN AS DIFFIE-HELLMAN KEY EXCHANGE. HE MID-S SAW TWO MAJOR PUBLIC ADVANCES. FIRST WAS THE PUBLICATION OF THE DRAFT DATA ENCRYPTION STANDARD IN THE U.S. FEDERAL REGISTER ON MARCH. THE PROPOSED DESCIPHER WAS SUBMITTED BY A RESEARCH GROUP AT IBM, AT THE INVITATION OF THE NATIONAL BUREAU OF STANDARDS NOW NIST, IN AN EFFORT TO DEVELOP SECURE ELECTRONIC COMMUNICATION FACILITIES FOR BUSINESSES SUCH AS BANKS AND OTHER LARGE FINANCIAL ORGANIZATIONS. AFTER 'ADVICE' AND MODIFICATION BY NSA, ACTING BEHIND THE SCENES, IT WAS ADOPTED AND PUBLISHED AS A FEDERAL INFORMATION PROCESSING STANDARD PUBLICATION IN-. DES WAS THE FIRST PUBLICLY ACCESSIBLE CIPHER TO BE 'BLESSED' BY A NATIONAL AGENCY SUCH AS NSA. THE RELEASE OF ITS SPECIFICATION BY NBS STIMULATED AN EXPLOSION OF PUBLIC AND ACADEMIC INTEREST IN CRYPTOGRAPHY. THE AGING DES WAS OFFICIALLY REPLACED BY THE ADVANCED ENCRYPTION STANDARD AES IN- WHEN NIST ANNOUNCED FIPS-. AFTER AN OPEN COMPETITION, NIST SELECTED RIJNDAEL, SUBMITTED BY TWO BELGIAN CRYPTOGRAPHERS, TO BE THE AES. DES, AND MORE SECURE VARIANTS OF IT, ARE STILL USED TODAY, HAVING BEEN INCORPORATED INTO MANY NATIONAL AND ORGANIZATIONAL STANDARDS. HOWEVER, ITS X-BIT KEY-SIZE HAS BEEN SHOWN TO BE INSUFFICIENT TO GUARD AGAINST BRUTE FORCE ATTACKS ONE SUCH ATTACK, UNDERTAKEN BY THE CYBER CIVIL-RIGHTS GROUP ELECTRONIC FRONTIER FOUNDATION IN-, SUCCEEDED IN- HOURS. AS A RESULT, USE OF STRAIGHT DES ENCRYPTION IS NOW WITHOUT DOUBT INSECURE FOR USE IN NEW CRYPTOSYSTEM DESIGNS, AND MESSAGES PROTECTED BY OLDER CRYPTOSYSTEMS USING DES, AND INDEED ALL MESSAGES SENT SINCE USING DES, ARE ALSO AT RISK. REGARDLESS OF DES' INHERENT");
		});


		// --------------diagram main
		$("select").change(function(){
			var set = new Set();
			var number = [];
			var text = $("#text1").val();
			$("#findtext").html(text);
			text=text.toLowerCase();
			var arr = text.split('');
			arr.forEach(function(item, i, arr) {
				set.add(item);
			});
			arr = Array.from(set);
			arr.forEach(function(item, i, arr) {
				var count = text.split(item).length - 1;
				number.push(new Array(item,count));
			});
			number.sort(compareNumeric);
			var choose1 = $("#first option:selected").val();
			if(choose1=="number"){
			diagram('container11','Character Repeat Chart',number);

			}
			else{

				diagram('container11','Character Repeat Chart',number.sort());
			}

			var choose4 = $("#four option:selected").val();
			if(choose4=="number"){

				diagram('container2','Character Repeat Chart',number);

			}
			else{
				diagram('container2','Character Repeat Chart',number.sort());

			}
		});
		// -------VAR TEXT VAR APLH
		var text = "ALTHOUGH CRYPTOGRAPHY HAS A LONG AND COMPLEX HISTORY, IT WASN'T UNTIL THE CENTURY THAT IT DEVELOPED ANYTHING MORE THAN AD HOC APPROACHES TO EITHER ENCRYPTION OR CRYPTANALYSIS THE SCIENCE OF FINDING WEAKNESSES IN CRYPTO SYSTEMS. EXAMPLES OF THE LATTER INCLUDE CHARLES BABBAGE'S CRIMEAN WAR ERA WORK ON MATHEMATICAL CRYPTANALYSIS OF POLYALPHABETIC CIPHERS, REDEVELOPED AND PUBLISHED SOMEWHAT LATER BY THE PRUSSIAN FRIEDRICH KASISKI. UNDERSTANDING OF CRYPTOGRAPHY AT THIS TIME TYPICALLY CONSISTED OF HARD-WON RULES OF THUMB; SEE, FOR EXAMPLE, AUGUSTE KERCKHOFFS'CRYPTOGRAPHIC WRITINGS IN THE LATTER CENTURY. EDGAR ALLAN POE USED SYSTEMAT IC ME";
		var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .,;-'";
	// -------markup symbols
		$("#find").keyup(function(){
			var text = $("#text1").val();
			var word = $("#find").val().toUpperCase();
			text = text.replace(new RegExp(word,'g'),'<span class="colortext">'+word+'</span>');
			$("#findtext").html(text);
		});
		$(".button1").click(function(){
			$(".content").hide();
			$(".content2").show();
			$(".clear").show();
			var set = new Set();
			var bigramSet = new Set();
			var threegramSet = new Set();
			var number = [];
			var bigram = [];
			var threegram = [];
			var text = $("#text1").val();
			$("#findtext").html(text);
			text=text.toLowerCase();
			var arr = text.split('');
			var word = text.split(' ');
			arr.forEach(function(item, i, arr) {
				set.add(item);
			});

		word.forEach(function(item, i, arr) {
			item = item.replace(/\n/g, "");
			item = item.replace(/\ /g,"");
			if(item.length>1){
				for(var j=0;j<item.length-2;j++){
					bigramSet.add(item.substring(j,j+2));
				}
			}
		});
		word.forEach(function(item, i, arr) {
			item = item.replace(/\n/g, "");
			item = item.replace(/\ /g,"");
			if(item.length>2){
				for(var j=0;j<item.length-3;j++){
					threegramSet.add(item.substring(j,j+3));
				}
			}
		});
		arr = Array.from(set);
		arrBi = Array.from(bigramSet);
		arrThree = Array.from(threegramSet);
		arr.sort();
		arr.forEach(function(item, i, arr) {

			var count = text.split(item).length - 1;
			number.push(new Array(item,count));

		});
		arrBi.forEach(function(item, i, arr) {

			var count = text.split(item).length - 1;
			if(count>=10){
				bigram.push(new Array(item,count));

			}
		});

		arrThree.forEach(function(item, i, arr) {

			var count = text.split(item).length - 1;
			if(count>=10){
				threegram.push(new Array(item,count));
			}
		});

		number.sort(compareNumeric);
		bigram.sort(compareNumeric);
		threegram.sort(compareNumeric);
		diagram('container11','Character Repeat Chart',number.slice(0,15));
		diagram('container12','Diagram of repeating bits',bigram.slice(0,15));
		diagram('container13','Diagram trigger repeats',threegram.slice(0,15));

		});
		$(".default").click(function(){
			$("#text1").val("IT INTRODUCED A RADICALLY NEW METHOD OF DISTRIBUTING CRYPTOGRAPHIC KEYS, WHICH WENT FAR TOWARD SOLVING ONE OF THE FUNDAMENTAL PROBLEMS OF CRYPTOGRAPHY, KEY DISTRIBUTI ON, AND HAS BECOME KNOWN AS DIFFIE-HELLMAN KEY EXCHANGE. THE ARTICLE ALSO STIMULATED THE ALMOST IMMEDIATE PUBLIC DEVELOPMENT OF A NEW CLASS OF ENCIPHERING ALGORITHMS, THE ASYMMETRIC KEY ALGORITHMS. PRIOR TO THAT TIME, ALL USEFUL MODERN ENCRYPTION ALGORITHMS HAD BEEN SYMMETRIC KEY ALGORITHMS, IN WHICH THE SAME CRYPTOGRAPHIC KEY IS USED WITH THE UNDERLYING ALGORITHM BY BOTH THE SENDER AND THE RECIPIENT, WHO MUST BOTH KEEP IT SECRET. ALL OF THE ELECTROMECHANICAL MACHINES USED IN WWII WERE OF THIS LOGICAL CLASS, AS WERE THE CAESAR AND ATBASH CIPHERS AND ESSENTIALLY ALL CIPHER SYSTEMS THROUGHOUT HISTORY. THE 'KEY' FOR A CODE IS, OF COURSE, THE CODEBOOK, WHICH MUST LIKEWISE BE DISTRIBUTED AND KEPT SECRET, AND SO SHARES MOST OF THE SAME PROBLEMS IN PRACTICE. OF NECESSITY, THE KEY IN EVERY SUCH SYSTEM HAD TO BE EXCHANGED BETWEEN THE COMMUNICATING PARTIES IN SOME SECURE WAY PRIOR TO ANY USE OF THE SYSTEM THE TERM USUALLY USED IS 'VIA A SECURE CHANNEL' SUCH AS A TRUSTWORTHY COURIER WITH A BRIEFCASE HANDCUFFED TO A WRIST, OR FACE-TO-FACE CONTACT, OR A LOYAL CARRIER PIGEON. THIS REQUIREMENT IS NEVER TRIVIAL AND VERY RAPIDLY BECOMES UNMANAGEABLE AS THE NUMBER OF PARTICIPANTS INCREASES, OR WHEN SECURE CHANNELS AREN'T AVAILABLE FOR KEY EXCHANGE, OR WHEN, AS IS SENSIBLE CRYPTOGRAPHIC PRACTICE, KEYS ARE FREQUENTLY CHANGED.THE AGING DES WAS OFFICIALLY REPLACED BY THE ADVANCED ENCRYPTION STANDARD AES IN- WHEN NIST ANNOUNCED FIPS. AFTER AN OPEN COMPETITION, NIST SELECTED RIJNDAEL, SUBMITTED BY TWO BELGIAN CRYPTOGRAPHERS, TO BE THE AES. DES, AND MORE SECURE VARIANTS OF IT SUCH AS TRIPLE DES, ARE STILL USED TODAY, HAVING BEEN INCORPORATED INTO MANY NATIONAL AND ORGANIZATIONAL STANDARDS. HOWEVER, ITS X-BIT KEY-SIZE HAS BEEN SHOWN TO BE INSUFFICIENT TO GUARD AGAINST BRUTE FORCE ATTACKS ONE SUCH ATTACK, UNDERTAKEN BY THE CYBER CIVIL-RIGHTS GROUP ELECTRONIC FRONTIER FOUNDATION IN-, SUCCEEDED IN- HOURS. AS A RESULT, USE OF STRAIGHT DES ENCRYPTION IS NOW WITHOUT DOUBT INSECURE FOR USE IN NEW CRYPTOSYSTEM DESIGNS, AND MESSAGES PROTECTED BY OLDER CRYPTOSYSTEMS USING DES, AND INDEED ALL MESSAGES SENT SINCE USING DES, ARE ALSO AT RISK. REGARDLESS OF DES' INHERENT QUALITY, THE DES KEY SIZE WAS THOUGHT TO BE TOO SMALL BY SOME EVEN IN-, PERHAPS MOST PUBLICLY BY WHITFIELD DIFFIE. THERE WAS SUSPICION THAT GOVERNMENT ORGANIZATIONS EVEN THEN HAD SUFFICIENT COMPUTING POWER TO BREAK DES MESSAGES; CLEARLY OTHERS HAVE ACHIEVED THIS CAPABILITY.THE SECOND DEVELOPMENT, IN-, WAS PERHAPS EVEN MORE IMPORTANT, FOR IT FUNDAMENTALLY CHANGED THE WAY CRYPTOSYSTEMS MIGHT WORK. THIS WAS THE PUBLICATION OF THE PAPER NEW DIRECTIONS IN CRYPTOGRAPHY BY WHITFIELD DIFFIE AND MARTIN HELLMAN. IT INTRODUCED A RADICALLY NEW METHOD OF DISTRIBUTING CRYPTOGRAPHIC KEYS, WHICH WENT FAR TOWARD SOLVING ONE OF THE FUNDAMENTAL PROBLEMS OF CRYPTOGRAPHY, KEY DISTRIBUTION, AND HAS BECOME KNOWN AS DIFFIE-HELLMAN KEY EXCHANGE. HE MID-S SAW TWO MAJOR PUBLIC ADVANCES. FIRST WAS THE PUBLICATION OF THE DRAFT DATA ENCRYPTION STANDARD IN THE U.S. FEDERAL REGISTER ON MARCH. THE PROPOSED DESCIPHER WAS SUBMITTED BY A RESEARCH GROUP AT IBM, AT THE INVITATION OF THE NATIONAL BUREAU OF STANDARDS NOW NIST, IN AN EFFORT TO DEVELOP SECURE ELECTRONIC COMMUNICATION FACILITIES FOR BUSINESSES SUCH AS BANKS AND OTHER LARGE FINANCIAL ORGANIZATIONS. AFTER 'ADVICE' AND MODIFICATION BY NSA, ACTING BEHIND THE SCENES, IT WAS ADOPTED AND PUBLISHED AS A FEDERAL INFORMATION PROCESSING STANDARD PUBLICATION IN-. DES WAS THE FIRST PUBLICLY ACCESSIBLE CIPHER TO BE 'BLESSED' BY A NATIONAL AGENCY SUCH AS NSA. THE RELEASE OF ITS SPECIFICATION BY NBS STIMULATED AN EXPLOSION OF PUBLIC AND ACADEMIC INTEREST IN CRYPTOGRAPHY. THE AGING DES WAS OFFICIALLY REPLACED BY THE ADVANCED ENCRYPTION STANDARD AES IN- WHEN NIST ANNOUNCED FIPS-. AFTER AN OPEN COMPETITION, NIST SELECTED RIJNDAEL, SUBMITTED BY TWO BELGIAN CRYPTOGRAPHERS, TO BE THE AES. DES, AND MORE SECURE VARIANTS OF IT, ARE STILL USED TODAY, HAVING BEEN INCORPORATED INTO MANY NATIONAL AND ORGANIZATIONAL STANDARDS. HOWEVER, ITS X-BIT KEY-SIZE HAS BEEN SHOWN TO BE INSUFFICIENT TO GUARD AGAINST BRUTE FORCE ATTACKS ONE SUCH ATTACK, UNDERTAKEN BY THE CYBER CIVIL-RIGHTS GROUP ELECTRONIC FRONTIER FOUNDATION IN-, SUCCEEDED IN- HOURS. AS A RESULT, USE OF STRAIGHT DES ENCRYPTION IS NOW WITHOUT DOUBT INSECURE FOR USE IN NEW CRYPTOSYSTEM DESIGNS, AND MESSAGES PROTECTED BY OLDER CRYPTOSYSTEMS USING DES, AND INDEED ALL MESSAGES SENT SINCE USING DES, ARE ALSO AT RISK. REGARDLESS OF DES' INHERENT");
		});
		$(".clear").click(function(){
			$("#text1").val("");
		});


		// ---------------cezar_lab2
		// ---------------keygen cezar
		$("#keygen").click(function(){
			var arr = initialize();
			var text = $("#text1").val();
			text=text.toLowerCase();
			var number = [];
			arr.forEach(function(item, i, arr) {
				var count = text.split(item).length - 1;
				number.push(new Array(item,count));
			});

			var letter = number.sort(compareNumeric)[0][0].toUpperCase();
			var alph = $("#alph").html();
			var key=alph.indexOf(" ")-alph.indexOf(letter);
			$("#shift").val(key);
		});
		// ------------------start cezar
		$("#pusk").click(function(){
			$("#cesar").show();
			var key = $("#shift").val();
			var alph = $("#alph").html();
			var shift = (alph.length)-key;
			var shiftedAlph = alph.slice(alph.length-shift);
			shiftedAlph+=alph.slice(0,alph.length-shift);

			$("#shiftAlph").html(shiftedAlph)
			var str = $("#cesarShifr").html();
			var shiftedStr="";
			for(var i=0;i<str.length;i++){
				var index = alph.indexOf(str[i]);
				shiftedStr+=shiftedAlph[index];
			}
			$("#cesar").html(shiftedStr);

		});

		// --------------rozhifr start
		$("#rozshifr").click(function(){
			$("#deshifr").show();
			$(".hide").show();
			$("#alph").html("ABCDEFGHIJKLMNOPQRSTUVWXYZ .,;-'");

		});
		$(".default").click();
		$("#input").click();
		function compareNumeric(a, b) {
			if (a[1]> b[1]) return -1;
			if (a[1] < b[1]) return 1;
		}
		function initialize() {
			var set = new Set();
			var number = [];
			var text = $("#text1").val();
			text=text.toLowerCase();
			var arr = text.split('');
			arr.forEach(function(item, i, arr) {
				set.add(item);
			});
			arr = Array.from(set);


			return arr;
		}
		$(".button2").click(function(){
			$(".content").hide();
			$(".content3").show();
			$("#deshifr").hide();
			$("#cesar").hide();
	$("#text1").val("OBIBVSIS.RI,TIBVSIEO'KI,.IO;'WZKIP'WBOW.NAIB,;I WZWBO'GI,TTWQS'AIES'SIB,ZRIBVOBIBVSGIQ,CZRI.SDS'I'SDSOZIBVOBIBVSIUS' O.IS.WU OIQW;VS'IVORIPSS.IP',YS.IPSQOCASIWBIE,CZRIUWDSIBVSIRSTSOBSRIS.S GIBVSIQVO.QSIB,IAOGIBVSGIES'SI.,BIESZZIO.RITOW'ZGIPSOBS.JICAI.ODGIQ'G;B,U'O;VS'AIEWBVIQ,,;S'OBW,.IT', IP'WBWAVIO.RIRCBQVIQ'G;B,U'O;VS'AIOTBS'IP',YSIW.B,IASDS'OZIXO;O.SASI.ODGIQ'G;B,IAGABS AJIBVSIP'SOYIW.B,I,.SI,TIBVS KIX.MKITO ,CAZGIZSRIB,IBVSICAIDWQB,'GIW.IBVSIPOBBZSI,TI WREOGLIO.RIB,IIBVSI;CPZWQOBW,.I,TIBVOBITOQBIW.IBVSIQVWQOU,IB'WPC.SIAV,'BZGIOTBS'IBVSIPOBBZSKIBV,CUVIBVSIXO;O.SASIASS I.,BIB,IVODSI.,BWQSRIT,'IBVSGIYS;BICAW.UIBVSIX.MIAGABS JIOICA");
			var number = [];
			var set = new Set()
			var text = $("#text1").val();
			$("#cesarShifr").html(text);
			text=text.toLowerCase();
			var arr = text.split('');

			arr.forEach(function(item, i, arr) {
				set.add(item);
			});

			arr = Array.from(set);
			arr.forEach(function(item, i, arr) {
				var count = text.split(item).length - 1;
				number.push(new Array(item,count));
			});

			number.sort(compareNumeric);

			diagram('container2','Character Repeat Chart',number);

		});

			$("#replace").click(function(){
				var val1 = $("#firstSymb").val().toUpperCase();
				var val2 = $("#secondSymb").val().toUpperCase();
				swap(val1,val2);
				$("#firstSymb").val("");
				$("#secondSymb").val("");

			});

		function swap(val1,val2) {
			var alph = $("#alphabet3").html();
			var str = $("#text3").html();
			var modStr="";
			var modAlph=$("#alphabetMod3").html();
			console.log(modAlph);
			var a = alph.indexOf(val1);
			var b = alph.indexOf(val2);
			var index1 = modAlph.indexOf(val1);
			var index2 = modAlph.indexOf(val2);
			var str1 = modAlph.slice(0,index1);
			var str2 = modAlph.slice(index1+1);
			modAlph = str1+val2+str2;
			var str1 = modAlph.slice(0,index2);
			var str2 = modAlph.slice(index2+1);
			modAlph = str1+val1+str2;
			$("#alphabetMod3").html(modAlph);
			for(var i=0;i<str.length;i++){
				var index = alph.indexOf(str[i]);
				modStr+=modAlph[index];
			}
			$("#text4").val(modStr);
			$("#emptyText").val(modAlph);
			$("#table3 tr:eq(0)").empty();
			$("#table3 tr:eq(1)").empty();
			for(var i=0;i<alph.length;i++){
				$("#table3 tr:eq(0)").append( "<td>"+alph[i]+"</td>" )
				$("#table3 tr:eq(1)").append( "<td>"+modAlph[i]+"</td>" )

			}

		};
	// -------------------lab3zamina
		$(".button3").click(function(){

			$(".content").hide();
			$(".content4").show();
			$("#text3").html("JY,CE-Z,CAB.MZ-Z.,C-BFKBL,;BAC,C-DJYC;B,MCBYC.C;;J,RBFKB.FDLICSBZLL-FZ.MB,FBJ,;BJDL-FWCDCY,BZYABACWCIFLDCY,TBKF-BZIIB,MZ,BC.FIFEJ.ZIBACDZYA;BZYABMJ;,F-J.BZYAB.PI,P-ZIBDCDF-JZIB-C;C-WZ,JFYUBQMJICB;FIWJYEB.J,RV PJIAJYEB,Z;G;T;LC.JKJCABZLL-FZ.MB.FDLICSJ,RB-CNPJ-C;BACWCIFLDCY,BZYABJDLIJ.Z,JFYBFKB,MCBYCQUBDF-CB.FDLICSBDFACI;BFKBL,;BZYABJ,O;B.FDLFYCY,;B Z;CABFYB,MCBP;ZECBFKB.FDLP,C-;BZYABDFAC-YBJYKF-DZ,JFYB,C.MYFIFEJC;TB,M-CCBICWCI;BFKBL,;B.FDLP,C-VZJACABAC;JEYB.FPIAB CBLFJY,CABFP,UBQMJ.MBZ-CBAJKKC-CY,JZ,CAB RBIJ;,BZYAB.MZ-Z.,C-BFKB;FIWJYEB,Z;G;TBJYBFP-BFLJYJFYB;R;,CDBZYABLZ-,J.PIZ-IRBKPY.,JFYZIVIFEJ.ZIBAC;JEYBICWCI;BZ-CB,MCBGCRBKF-BDZJYB");


			var str = $("#text3").html();
			var text = $("#text3").html();
			var modStr="";
			$("#alphabet3").html("ABCDEFGHIJKLMNOPQRSTUVWXYZ .,;-'");
			var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .,;-'";
			var modAlph=alph;
			$("#alphabetMod3").html(modAlph);
			var arrAlph = alph.split('');
		$("#table3 tr:eq(0)").empty();
			$("#table3 tr:eq(1)").empty();
			for(var i=0;i<alph.length;i++){
				$("#table3 tr:eq(0)").append( "<td>"+alph[i]+"</td>" )
				$("#table3 tr:eq(1)").append( "<td>"+modAlph[i]+"</td>" )

			}
			for(var i=0;i<str.length;i++){
				var index = alph.indexOf(str[i]);
				modStr+=modAlph[index];
			}


			$("#text4").val();

			$("#emptyText").val(modAlph);

			var set = new Set();
			var bigramSet = new Set();
			var threegramSet = new Set();
			var number = [];
			var bigram = [];
			var threegram = [];

			var arr = text.split('');
			arr.forEach(function(item, i, arr) {
				set.add(item);
			});
			for(var j=0;j<text.length-1;j++){
				bigramSet.add(text.substring(j,j+2));
			}

			for(var j=0;j<text.length-2;j++){
				threegramSet.add(text.substring(j,j+3));
			}
			arr = Array.from(set);
			arrBi = Array.from(bigramSet);
			arrThree = Array.from(threegramSet);
			arr.forEach(function(item, i, arr) {

				var count = text.split(item).length - 1;
				number.push(new Array(item,count));

			});
			arrBi.forEach(function(item, i, arr) {

				var count = text.split(item).length - 1;
				bigram.push(new Array(item,count));


			});
			arrThree.forEach(function(item, i, arr) {

				var count = text.split(item).length - 1;
				threegram.push(new Array(item,count));
			});
			number.sort(compareNumeric);
			bigram.sort(compareNumeric);
			threegram.sort(compareNumeric);
			diagram('container31','Character Repeat Chart',number.slice(0,15));
			diagram('container32','Diagram of repeating bits',bigram.slice(0,15));
			diagram('container33','Diagram trigger repeats',threegram.slice(0,15));
			});
	// ------------------zamina
			$("#rozsh").click(function(){

				$("#alphabetMod3").html("D EMGOKZLIFPHQ'UWYX.,-V;NABCTSRJ");
				var alph = $("#alphabet3").html();
				var str = $("#text3").html();
				var modStr="";
				var modAlph=$("#alphabetMod3").html();
				$("#alphabetMod3").html(modAlph);
				for(var i=0;i<str.length;i++){
					var index = alph.indexOf(str[i]);
					modStr+=modAlph[index];
				}
				$("#text4").val(modStr);
				$("#table3 tr:eq(0)").empty();
				$("#table3 tr:eq(1)").empty();
				for(var i=0;i<alph.length;i++){
					$("#table3 tr:eq(0)").append( "<td>"+alph[i]+"</td>" )
					$("#table3 tr:eq(1)").append( "<td>"+modAlph[i]+"</td>" )

				}
				$("#emptyText").val(modAlph);


			});
			// --------------------obvedenna zamina
		$("#find4").keyup(function(){
			var text = 'JY,CE-Z,CAB.MZ-Z.,C-BFKBL,;BAC,C-DJYC;B,MCBYC.C;;J,RBFKB.FDLICSBZLL-FZ.MB,FBJ,;BJDL-FWCDCY,BZYABACWCIFLDCY,TBKF-BZIIB,MZ,BC.FIFEJ.ZIBACDZYA;BZYABMJ;,F-J.BZYAB.PI,P-ZIBDCDF-JZIB-C;C-WZ,JFYUBQMJICB;FIWJYEB.J,RV PJIAJYEB,Z;G;T;LC.JKJCABZLL-FZ.MB.FDLICSJ,RB-CNPJ-C;BACWCIFLDCY,BZYABJDLIJ.Z,JFYBFKB,MCBYCQUBDF-CB.FDLICSBDFACI;BFKBL,;BZYABJ,O;B.FDLFYCY,;B Z;CABFYB,MCBP;ZECBFKB.FDLP,C-;BZYABDFAC-YBJYKF-DZ,JFYB,C.MYFIFEJC;TB,M-CCBICWCI;BFKBL,;B.FDLP,C-VZJACABAC;JEYB.FPIAB CBLFJY,CABFP,UBQMJ.MBZ-CBAJKKC-CY,JZ,CAB RBIJ;,BZYAB.MZ-Z.,C-BFKB;FIWJYEB,Z;G;TBJYBFP-BFLJYJFYB;R;,CDBZYABLZ-,J.PIZ-IRBKPY.,JFYZIVIFEJ.ZIBAC;JEYBICWCI;BZ-CB,MCBGCRBKF-BDZJYB';
			var word = $("#find4").val().toUpperCase();
			text = text.replace(new RegExp(word,'g'),'<span class="colortext">'+word+'</span>');
			$("#text3").html(text);
		});
		function diagram(name,title,data) {

		Highcharts.chart(name, {
					chart: {
						type: 'column'
					},
					title: {
						text: title
					},
					subtitle: {
						text: ''
					},
					xAxis: {
						type: 'category',
						labels: {

							style: {
								fontSize: '13px',
								fontFamily: 'Verdana, sans-serif'
							}
						}
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Number of repetitions'
						}
					},
					legend: {
						enabled: false
					},
					tooltip: {
						pointFormat: 'Occurs in the text: <b>{point.y:.1f} time</b>'
					},
					series: [{
						name: 'Number',
						data: data,

						dataLabels: {
							enabled: true,
							rotation: -90,
							color: '#FFFFFF',
							align: 'right',
							format: '{point.y:.1f}', // one decimal
							y: 10, // 10 pixels down from the top
							style: {
								fontSize: '1em',
								fontFamily: 'Verdana, sans-serif'
							}
						}
					}]
				});


		}
		function diagram1(name,data,data1,data2) {

		Highcharts.chart(name, {
	    chart: {
	        type: 'line'
	    },
	    title: {
	        text: 'Character Repeat Chart'
	    },
	    subtitle: {

	    },
	    xAxis: {
	        categories: data
	    },
	    yAxis: {
	        title: {
	           text: 'Number of repetitions'
	        }
	    },
	    plotOptions: {
	        line: {
	            dataLabels: {
	                enabled: true
	            },
	            enableMouseTracking: false
	        }
	    },
		tooltip: {
						pointFormat: 'Occurs in the text: <b>{point.y:.1f} time</b>'
					},
	    series: [{
	        name: 'Open text',
	        data: data1
	    }, {
	        name: 'Et',
	        data:data2
	    }]
	});

		}
	////LAB4
		function matrixArray(rows,columns){
			  var arr = new Array();
			  for(var i=0; i<columns; i++){
				arr[i] = new Array();
				for(var j=0; j<rows; j++){
				  arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
				}
			  }
			  return arr;
			}

			// ----------------------vijener lab4mbutton4
		$(".button4").click(function(){
			$(".content").hide();
			$(".content5").show();

			$("#text5").html("AT THE END OF THE WAR, ON APRIL, BRITAIN'S TOP MILITARY OFFICERS WERE TOLD THAT THEY COULD NEVER REVEAL THAT THE GERMAN ENIGMA CIPHER HAD BEEN BROKEN BECAUSE IT WOULD GIVE THE DEFEATED ENEMY THE CHANCE TO SAY THEY WERE NOT WELL AND FAIRLY BEATEN. US NAVY CRYPTOGRAPHERS WITH COOPERATION FROM BRITISH AND DUTCH CRYPTOGRAPHERS AFTER BROKE INTO SEVERAL JAPANESE NAVY CRYPTO SYSTEMS. THE BREAK INTO ONE OF THEM, JN-, FAMOUSLY LED TO THE US VICTORY IN THE BATTLE OF MIDWAY; AND TO THE PUBLICATION OF THAT FACT IN THE CHICAGO TRIBUNE SHORTLY AFTER THE BATTLE, THOUGH THE JAPANESE SEEM NOT TO HAVE NOTICED FOR THEY KEPT USING THE JN- SYSTEM. A US")
			$("#vigKey").val("vaskovadum");
			$("#matrix").empty();


			var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .,;-'".toLowerCase();
			var myMatrix = matrixArray(32,32);
			for(var i=0;i<alph.length;i++){
				var key = i;
				var shift = (alph.length)-key;
				var shiftedAlph = alph.slice(alph.length-shift);
				shiftedAlph+=alph.slice(0,alph.length-shift);
				for(var j=0;j<alph.length;j++){

					myMatrix[i][j]=shiftedAlph[j];

				}
			}
			for(var i=0;i<alph.length;i++){

				$("#matrix").append( "<tr></tr>" )
				for(var j=0;j<alph.length;j++){

					$("#matrix tr:eq("+i+")").append( "<td>"+myMatrix[i][j]+"</td>" )

				}
			}
				var str = $("#text5").html().toLowerCase();

				var keyStr="";
				var keyWord=$("#vigKey").val();

				for(var i=0,j=0;i<str.length;i++,j++){
					keyStr+= keyWord[j];
					if(j==keyWord.length-1)j=-1;
				}
				var newStr="";
				for(var i=0;i<str.length;i++){
					var index1 = alph.indexOf(keyStr[i]);
					var index2 = alph.indexOf(str[i]);
					newStr+= myMatrix[index1][index2];

				}

				$("#vigShifr").html(newStr.toUpperCase());
				var startStr = "";
				for(var i=0;i<newStr.length;i++){
					var index = alph.indexOf(keyStr[i]);
					var str = "";
					str = myMatrix[index].join("");

					var index1 = str.indexOf(newStr[i]);
					startStr+= alph[index1];

				}
				$("#vigText").html(startStr.toUpperCase());
				var number = [];
				var number1 = [];
				var text = $("#text5").html().toLowerCase();
				var text1 = newStr.toLowerCase();
				var arr = alph.split('');

				arr.forEach(function(item, i, arr) {
					var count = text.split(item).length - 1;
					number.push(new Array(item,count));
				});
				arr.forEach(function(item, i, arr) {
					var count = text1.split(item).length - 1;
					number1.push(new Array(item,count));
				});
				number.sort(compareNumeric);
				number1.sort(compareNumeric);
				var numberAlph = [];
				number.forEach(function(item, i, arr) {
				numberAlph.push(item[0].toUpperCase());
				});
				diagram1('container41',numberAlph,number,number1)
			});
			$("#zashifr").click(function(){
			});


		});
