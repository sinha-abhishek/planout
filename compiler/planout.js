/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,2],$V1=[1,5],$V2=[1,8],$V3=[1,9],$V4=[1,8,24,49,51],$V5=[1,7,8,24,49,51],$V6=[1,16],$V7=[1,17],$V8=[1,18],$V9=[1,19],$Va=[1,20],$Vb=[1,22],$Vc=[1,21],$Vd=[1,23],$Ve=[1,24],$Vf=[1,25],$Vg=[1,26],$Vh=[8,14,15,16,17,20,23,24,25,26,37,39],$Vi=[1,31],$Vj=[1,32],$Vk=[1,33],$Vl=[1,34],$Vm=[1,35],$Vn=[1,36],$Vo=[1,37],$Vp=[1,38],$Vq=[1,39],$Vr=[1,40],$Vs=[1,41],$Vt=[1,42],$Vu=[1,43],$Vv=[1,44],$Vw=[1,45],$Vx=[1,7,8,17,19,22,24,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,49,51,53,55],$Vy=[2,10],$Vz=[1,46],$VA=[19,43],$VB=[1,52],$VC=[1,54],$VD=[1,55],$VE=[1,53],$VF=[1,7,8,17,19,22,24,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,46,49,51,53,55],$VG=[24,43],$VH=[1,7,8,19,22,24,30,31,32,33,34,35,36,37,40,41,42,43,49,51,53,55],$VI=[1,7,8,19,22,24,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,49,51,53,55],$VJ=[1,7,8,19,22,24,30,31,32,33,34,35,40,41,42,43,49,51,53,55],$VK=[1,7,8,19,22,24,40,41,42,43,49,51,53,55],$VL=[22,43];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"start":3,"rules_list":4,"rule":5,"expression":6,"END_STATEMENT":7,"IDENTIFIER":8,"=":9,"simple_expression":10,"ARROW_ASSIGN":11,"switch_expression":12,"if_expression":13,"TRUE":14,"FALSE":15,"NULL":16,"[":17,"array":18,"]":19,"(":20,"arguments":21,")":22,"{":23,"}":24,"CONST":25,"JSON_START":26,"json":27,"%":28,"/":29,">":30,"<":31,"EQUALS":32,"NEQ":33,"LTE":34,"GTE":35,"+":36,"-":37,"*":38,"!":39,"OR":40,"COALESCE":41,"AND":42,",":43,"json_array":44,"json_map":45,":":46,"arguments_list":47,"values_list":48,"SWITCH":49,"cases_list":50,"IF":51,"optional_else_expression":52,"ELSE":53,"case":54,"THEN":55,"$accept":0,"$end":1},
terminals_: {2:"error",7:"END_STATEMENT",8:"IDENTIFIER",9:"=",11:"ARROW_ASSIGN",14:"TRUE",15:"FALSE",16:"NULL",17:"[",19:"]",20:"(",22:")",23:"{",24:"}",25:"CONST",26:"JSON_START",28:"%",29:"/",30:">",31:"<",32:"EQUALS",33:"NEQ",34:"LTE",35:"GTE",36:"+",37:"-",38:"*",39:"!",40:"OR",41:"COALESCE",42:"AND",43:",",46:":",49:"SWITCH",51:"IF",53:"ELSE",55:"THEN"},
productions_: [0,[3,1],[4,0],[4,2],[5,1],[5,2],[5,4],[5,4],[6,1],[6,1],[10,1],[10,1],[10,1],[10,1],[10,3],[10,4],[10,4],[10,3],[10,3],[10,1],[10,2],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,2],[10,3],[10,3],[10,3],[18,0],[18,1],[18,3],[27,1],[27,1],[27,3],[27,3],[44,0],[44,1],[44,3],[45,0],[45,3],[45,5],[21,0],[21,1],[21,1],[47,3],[47,5],[48,1],[48,3],[12,4],[13,6],[52,0],[52,2],[52,2],[50,0],[50,3],[54,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 this.$ = {"op": "seq", "seq": $$[$0]}; console.log(JSON.stringify(this.$)); return this.$; 
break;
case 2: case 37: case 44: case 62:
 this.$ = []; 
break;
case 3:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 4: case 8: case 9: case 19: case 41: case 51: case 52: case 60:
 this.$ = $$[$0]; 
break;
case 5: case 18: case 42: case 43:
 this.$ = $$[$0-1]; 
break;
case 6: case 7:
 this.$ = {"op": "set", "var": $$[$0-3], "value": $$[$0-1]}; 
break;
case 10:
 this.$ = {"op": "get", "var": $$[$0]}; 
break;
case 11:
 this.$ = true; 
break;
case 12:
 this.$ = false; 
break;
case 13:
 this.$ = null; 
break;
case 14:
 this.$ = {"op": "array", "values": $$[$0-1]}; 
break;
case 15:
 this.$ = $$[$0-1]; this.$["op"] = $$[$0-3]; 
break;
case 16:
 this.$ = {"op": "index", "base": $$[$0-3], "index": $$[$0-1]}; 
break;
case 17:
 this.$ = {"op": "seq", "seq": $$[$0-1]}; 
break;
case 20:
 this.$ = {"op": "literal", "value": $$[$0]}; 
break;
case 21:
 this.$ = {"op": "%", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 22:
 this.$ = {"op": "/", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 23:
 this.$ = {"op": ">", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 24:
 this.$ = {"op": "<", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 25:
 this.$ = {"op": "equals", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 26:
 this.$ = {"op": "not", "value": {"op": "equals", "left": $$[$0-2], "right": $$[$0]}}; 
break;
case 27:
 this.$ = {"op": "<=", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 28:
 this.$ = {"op": ">=", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 29:
 this.$ = {"op": "sum", "values": [$$[$0-2], $$[$0]]}; 
break;
case 30:
 this.$ = {"op": "sum", "values": [$$[$0-2], {"op": "negative", "value": $$[$0]}]}; 
break;
case 31:
 this.$ = {"op": "product", "values": [$$[$0-2], $$[$0]]}; 
break;
case 32:
 this.$ = {"op": "negative", "value": $$[$0]}; 
break;
case 33:
 this.$ = {"op": "not", "value": $$[$0]}; 
break;
case 34:
 this.$ = {"op": "or", "values": [$$[$0-2], $$[$0]]}; 
break;
case 35:
 this.$ = {"op": "coalesce", "values": [$$[$0-2], $$[$0]]}; 
break;
case 36:
 this.$ = {"op": "and", "values": [$$[$0-2], $$[$0]]}; 
break;
case 38:
 this.$ = [$$[$0]]; 
break;
case 39: case 46:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 40:
 this.$ = JSON.parse($$[$0]); 
break;
case 45:
 this.$ = []; this.$.push($$[$0]); 
break;
case 47: case 50: case 59:
 this.$ = {}; 
break;
case 48: case 53:
 this.$ = {}; this.$[$$[$0-2]] = $$[$0]; 
break;
case 49: case 54:
 this.$ = $$[$0-4]; this.$[$$[$0-2]] = $$[$0]; 
break;
case 55:
 this.$ = {}; this.$["values"] = [$$[$0]]; 
break;
case 56:
 this.$ = $$[$0-2]; this.$["values"].push($$[$0]); 
break;
case 57:
 this.$ = {"op": "switch", "cases": $$[$0-1]}; 
break;
case 58:
 this.$ = {"op": "cond", "cond": [{"if": $$[$0-3], "then": $$[$0-1]}]};
      if ($$[$0]["cond"]) {
        this.$["cond"] = this.$["cond"].concat($$[$0]["cond"]);
      }
    
break;
case 61:
 this.$ = {"op": "cond", "cond": [{"if": true, "then": $$[$0]}]}; 
break;
case 63:
 this.$ = $$[$0-2]; this.$.push($$[$0-1]); 
break;
case 64:
 this.$ = {"op": "case", "condidion": $$[$0-2], "result": $$[$0]}; 
break;
}
},
table: [o([1,8,49,51],$V0,{3:1,4:2}),{1:[3]},{1:[2,1],5:3,6:4,8:$V1,12:6,13:7,49:$V2,51:$V3},o($V4,[2,3]),o($V4,[2,4],{7:[1,10]}),{9:[1,11],11:[1,12]},o($V5,[2,8]),o($V5,[2,9]),{23:[1,13]},{20:[1,14]},o($V4,[2,5]),{8:$V6,10:15,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:27,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},o($Vh,[2,62],{50:28}),{8:$V6,10:29,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{7:[1,30],17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw},o($Vx,$Vy,{20:$Vz}),o($Vx,[2,11]),o($Vx,[2,12]),o($Vx,[2,13]),o($VA,[2,37],{18:47,10:48,8:$V6,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg}),o([8,24,49,51],$V0,{4:49}),{8:$V6,10:50,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},o($Vx,[2,19]),{8:$VB,17:$VC,23:$VD,25:$VE,27:51},{8:$V6,10:56,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:57,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{7:[1,58],17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw},{8:$V6,10:61,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,24:[1,59],25:$Vd,26:$Ve,37:$Vf,39:$Vg,54:60},{17:$Vi,22:[1,62],28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw},o($V4,[2,6]),{8:$V6,10:63,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:64,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:65,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:66,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:67,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:68,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:69,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:70,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:71,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:72,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:73,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:74,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:75,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:76,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:77,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:[1,81],10:82,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,21:78,22:[2,50],23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg,47:79,48:80},{19:[1,83],43:[1,84]},o($VA,[2,38],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),{5:3,6:4,8:$V1,12:6,13:7,24:[1,85],49:$V2,51:$V3},{17:$Vi,22:[1,86],28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw},o($Vx,[2,20]),o($VF,[2,40]),o($VF,[2,41]),o($VA,[2,44],{44:87,27:88,8:$VB,17:$VC,23:$VD,25:$VE}),o($VG,[2,47],{45:89,27:90,8:$VB,17:$VC,23:$VD,25:$VE}),o($VH,[2,32],{17:$Vi,28:$Vj,29:$Vk,38:$Vt}),o([1,7,8,19,22,24,43,49,51,53,55],[2,33],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),o($V4,[2,7]),o($V5,[2,57]),{7:[1,91]},{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw,55:[1,92]},{8:$V6,10:93,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{17:$Vi,19:[1,94],28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw},o($VI,[2,21],{17:$Vi}),o($VI,[2,22],{17:$Vi}),o($VJ,[2,23],{17:$Vi,28:$Vj,29:$Vk,36:$Vr,37:$Vs,38:$Vt}),o($VJ,[2,24],{17:$Vi,28:$Vj,29:$Vk,36:$Vr,37:$Vs,38:$Vt}),o($VJ,[2,25],{17:$Vi,28:$Vj,29:$Vk,36:$Vr,37:$Vs,38:$Vt}),o($VJ,[2,26],{17:$Vi,28:$Vj,29:$Vk,36:$Vr,37:$Vs,38:$Vt}),o($VJ,[2,27],{17:$Vi,28:$Vj,29:$Vk,36:$Vr,37:$Vs,38:$Vt}),o($VJ,[2,28],{17:$Vi,28:$Vj,29:$Vk,36:$Vr,37:$Vs,38:$Vt}),o($VH,[2,29],{17:$Vi,28:$Vj,29:$Vk,38:$Vt}),o($VH,[2,30],{17:$Vi,28:$Vj,29:$Vk,38:$Vt}),o($VI,[2,31],{17:$Vi}),o($VK,[2,34],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt}),o($VK,[2,35],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt}),o($VK,[2,36],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt}),{22:[1,95]},{22:[2,51],43:[1,96]},{22:[2,52],43:[1,97]},o([17,22,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43],$Vy,{9:[1,98],20:$Vz}),o($VL,[2,55],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),o($Vx,[2,14]),{8:$V6,10:99,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},o($Vx,[2,17]),o($Vx,[2,18]),{19:[1,100],43:[1,101]},o($VA,[2,45]),{24:[1,102],43:[1,103]},{46:[1,104]},o($Vh,[2,63]),{6:105,12:6,13:7,49:$V2,51:$V3},o($V5,[2,59],{52:106,17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw,53:[1,107]}),o($Vx,[2,16]),o($Vx,[2,15]),{8:[1,108]},{8:$V6,10:109,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$V6,10:110,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},o($VA,[2,39],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),o($VF,[2,42]),{8:$VB,17:$VC,23:$VD,25:$VE,27:111},o($VF,[2,43]),{8:$VB,17:$VC,23:$VD,25:$VE,27:112},{8:$VB,17:$VC,23:$VD,25:$VE,27:113},{7:[2,64]},o($V5,[2,58]),{8:$V6,10:115,13:114,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg,51:$V3},{9:[1,116]},o($VL,[2,56],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),o($VL,[2,53],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),o($VA,[2,46]),{46:[1,117]},o($VG,[2,48]),o($V5,[2,60]),o($V5,[2,61],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),{8:$V6,10:118,14:$V7,15:$V8,16:$V9,17:$Va,20:$Vb,23:$Vc,25:$Vd,26:$Ve,37:$Vf,39:$Vg},{8:$VB,17:$VC,23:$VD,25:$VE,27:119},o($VL,[2,54],{17:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,40:$Vu,41:$Vv,42:$Vw}),o($VG,[2,49])],
defaultActions: {105:[2,64]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:/* skip whitespace */
break;
case 2:return 14
break;
case 3:return 15
break;
case 4:return 16
break;
case 5:return 26
break;
case 6:return 49;
break;
case 7:return 51;
break;
case 8:return 53;
break;
case 9:return 8
break;
case 10: yy_.yytext = Number(yy_.yytext); return 25; 
break;
case 11: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 25; 
break;
case 12: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 25; 
break;
case 13:return 11
break;
case 14:return 40
break;
case 15:return 42
break;
case 16:return 41
break;
case 17:return 32
break;
case 18:return 35
break;
case 19:return 34
break;
case 20:return 33
break;
case 21:return 55
break;
case 22:return 7
break;
case 23:return yy_.yytext
break;
}
},
rules: [/^(?:#(.)*\n)/,/^(?:\s+)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:@)/,/^(?:switch\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:[a-zA-Z][a-zA-Z0-9_]*)/,/^(?:[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)/,/^(?:"(\\.|[^\\"])*")/,/^(?:'[^\']*')/,/^(?:<-)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:\?\?)/,/^(?:==)/,/^(?:>=)/,/^(?:<=)/,/^(?:!=)/,/^(?:=>)/,/^(?:;)/,/^(?:=|:|\[|\]|\(|\)|,|\{|\}|\+|%|\*|-|\/|%|>|<|!)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}