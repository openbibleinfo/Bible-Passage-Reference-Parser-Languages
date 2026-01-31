var bcv_regexps = class {
  constructor() {
    this.books = [];
    this.languages = ["mwm"];
    this.translations = [/S(?:ARDC|B)\b/gi];
    this.first = /(?:1\.?\s*|Makətūbə̄\.?\s*|Makətubə\.?\s*|Makətūbə\.?\s*|Makətubə̄\.?\s*)/;
    this.second = /(?:2\.?\s*|Makətūbə̄\.?\s*|Makətubə\.?\s*|Makətūbə\.?\s*|Makətubə̄\.?\s*)/;
    this.third = /3\.?\s*/;
    this.range_and = /(?:[&\u2013\u2014-]|\x26\.?\s*|(?:\x2d\.?\s*|–\.?\s*|—\.?\s*))/;
    this.range_only = /(?:[\u2013\u2014-]|(?:\x2d\.?\s*|–\.?\s*|—\.?\s*))/;
    this.match_end_split = /\d\W*(?:title)|\d\W*(?:ff)(?:[\s*]*\.)?|\d[\s*]*(?:(?:[a-e](?!\w)))|\x1e(?:[\s*]*[)\]\uff09])?|[\d\x1f]/gi;
    this.control = /[\x1e\x1f]/g;
    this.escaped_passage = /(?:^|[^\x1e\x1f\p{L}\p{N}])((?:(?:ch(?:apters?|a?pts?\.?|a?p?s?\.?)?\s*\d+\s*(?:[\u2013\u2014\-]|through|thru|to)\s*\d+\s*(?:from|of|in)(?:\s+the\s+book\s+of)?\s*)|(?:ch(?:apters?|a?pts?\.?|a?p?s?\.?)?\s*\d+\s*(?:from|of|in)(?:\s+the\s+book\s+of)?\s*)|(?:\d+(?:th|nd|st)\s*ch(?:apter|a?pt\.?|a?p?\.?)?\s*(?:from|of|in)(?:\s+the\s+book\s+of)?\s*))?\x1f(\d+)(?:\/\d+)?\x1f(?:\/\d+\x1f|[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—]|title\.?\s*(?![a-z])|(?:(?:chapter\.?\s*)|(?:verse\.?\s*)|(?:ff\.?\s*)|(?:&\.?\s*)|(?:[\-–—]\.?\s*))|(?:[a-e]\.?\s*(?!\w))(?!\w)|$)+)/giu;
    this.pre_book = /(?:^|(?<=[^\p{L}]))/gu;
    this.pre_number_book = /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))/gu;
    this.post_book = /(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/gu;
    this.all_books = [
          {
            osis: ["Ps"],
            testament: "a",
            extra: "2",
            regexp: /\b(Ps151)(?=\.1\b)/g
          },
          {
            osis: ["Gen"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(T(?:a\s*Kəla(?:\s*g[ií]r\s*y[aá](?:̰a(?:̰\s*gə̄?|\s*gə̄?)|a(?:̰\s*gə̄?|\s*gə̄?)))?|kg))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Bel"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Ɓesə̄?\s*Bel|Bel))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Lev"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Nd[uū]\s*najə(?:̄\s*y[aā]\s*Ng[aá]n\s*Lebi\s*gə̄?|\s*y[aā]\s*Ng[aá]n\s*Lebi\s*gə̄?)|Leb(?:i\s*Gə̄?)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Num"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(Tə(?:́da(?:\s*kutə\s*Ng[aá]n\s*Israel\s*gə̄?)?|da(?:\s*kutə\s*Ng[aá]n\s*Israel\s*gə̄?)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Sir"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Jeju\s*Kə(?:́\s*Ng[oō]n̄?\s*Sirak|\s*Ng[oō]n̄?\s*Sirak)|Sirak))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Wis"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(Kum\s*kedə̄?)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Lam"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*N[oō][oō]\s*rɔ̄?|\s*N[oō][oō]\s*rɔ̄?)|N[oō][oō]\s*rɔ̄?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["EpJer"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(Makət[uū]bə(?:̄\s*y[aā]\s*Jeremi|\s*y[aā]\s*Jeremi))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Rev"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət(?:ūbə̄\s*Yá̰a̰\s*gə̄\s*kə́\s*Jeju\s*teē\s*kum\s*Ja̰a̰\s*dɔ\s*tə́|ubə\s*Yaa\s*gə\s*kə\s*Jeju\s*tee\s*kum\s*Jaa\s*dɔ\s*tə)|Jeju\s*Te[eē]\s*Kum\s*Ja̰?a̰|Jeju\s*Te[eē]\s*Kum\s*Ja̰?a|Y[aá]̰?Jt))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Exod"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(Te[eē](?:\s*Ng[aá]n\s*Israel\s*gə̄?)?)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Deut"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(Nd[uū](?:\s*Najə(?:̄?\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]|\s*j[oō][oó])|\s*nge\s*ko(?:̰\s*j[oō][oó]|\s*j[oō][oó]))|̄)?)?)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Josh"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Jojue|\s*y[aā]\s*Jojue)|Joj(?:ue)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Judg"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Ng[eé]\s*Sarya\s*gə̄?|\s*y[aā]\s*Ng[eé]\s*Sarya\s*gə̄?)|Ng[eé]\s*Sarya|Sar))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Ruth"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Rutə|\s*y[aā]\s*Rutə)|Rutə))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Isa"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Ijai|\s*y[aā]\s*Ijai)|Ij(?:ai)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Sam"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel)|Sam(?:uel)?)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel)|Sam(?:uel)?))|\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel)|Sam(?:uel)?)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel)|Sam(?:uel)?))|1(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel)|Sam(?:uel)?)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Samuel)|Sam(?:uel)?))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Sam"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel))|Sam(?:uel)?)|\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel))|Sam(?:uel)?))|\.\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel))|Sam(?:uel)?)|\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel))|Sam(?:uel)?))|2(?:\.\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel))|Sam(?:uel)?)|\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Samuel|\s*j[oō][oó]\s*y[aā]\s*Samuel))|Sam(?:uel)?))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Kgs"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?)|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?))|Mban̄?g\s*Gə̄?|Mba)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?)|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?))|Mban̄?g\s*Gə̄?|Mba))|\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?)|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?))|Mban̄?g\s*Gə̄?|Mba)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?)|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?))|Mban̄?g\s*Gə̄?|Mba))|1(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?)|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?))|Mban̄?g\s*Gə̄?|Mba)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?)|\s*ta\s*kəga\s*dɔ\s*y[aā]\s*Mban(?:̄g\s*gə̄?|g\s*gə̄?))|Mban̄?g\s*Gə̄?|Mba))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Kgs"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə(?:̄(?:\.\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*yā\s*Mban̄g\s*gə̄|Mba(?:n̄?g)?)|\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*yā\s*Mban̄g\s*gə̄|Mba(?:n̄?g)?))|\.?\s*Mban̄?g|\.?\s*Mba)|ubə\.?\s*kə\s*nge\s*ko\s*joo\s*ya\s*Mbang\s*gə|ubə(?:̄\.\s*M|(?:\.?\s*M|̄\s*M))ban̄?g|ubə(?:̄\.\s*M|(?:\.?\s*M|̄\s*M))ba)|2(?:\.\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄))|\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə̄)))|2(?:\.\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə))|\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə)|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə|\s*j[oō][oó]\s*y[aā]\s*Mban̄?g\s*gə)))|2\.?\s*Mban̄?g|2\.?\s*Mba))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Chr"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə(?:̄(?:\.\s*(?:kə́\s*ta\s*kəga\s*dɔ\s*kə́\s*dɔ\s*Yá̰a̰\s*gə̄\s*ń\s*rāān̄\s*yá̰á̰\s*tə́\s*ní|Y(?:[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?)))|\s*(?:kə́\s*ta\s*kəga\s*dɔ\s*kə́\s*dɔ\s*Yá̰a̰\s*gə̄\s*ń\s*rāān̄\s*yá̰á̰\s*tə́\s*ní|Y(?:[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?))))|\.?\s*Y[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|\.?\s*Y[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?))|ubə\.?\s*kə\s*ta\s*kəga\s*dɔ\s*kə\s*dɔ\s*Yaa\s*gə\s*n\s*raan\s*yaa\s*tə\s*ni|ubə(?:̄\.\s*Y|(?:\.?\s*Y|̄\s*Y))[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|ubə(?:̄\.\s*Y|(?:\.?\s*Y|̄\s*Y))[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?))|1\.?\s*kə́\s*ta\s*kəga\s*dɔ\s*kə́\s*dɔ\s*Yá̰a̰\s*gə̄\s*ń\s*rāān̄\s*yá̰á̰\s*tə́\s*ní|1\.?\s*kə\s*ta\s*kəga\s*dɔ\s*kə\s*dɔ\s*Yaa\s*gə\s*n\s*raan\s*yaa\s*tə\s*ni|1\.?\s*Y[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|1\.?\s*Y[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?)))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Chr"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə(?:̄(?:\.\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*kə́\s*dɔ\s*Yá̰a̰\s*gə̄\s*ń\s*rāān̄\s*yá̰á̰\s*tə́\s*ní|Y(?:[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?)))|\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*kə́\s*dɔ\s*Yá̰a̰\s*gə̄\s*ń\s*rāān̄\s*yá̰á̰\s*tə́\s*ní|Y(?:[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?))))|\.?\s*Y[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|\.?\s*Y[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?))|ubə\.?\s*kə\s*nge\s*ko\s*joo\s*kə\s*dɔ\s*Yaa\s*gə\s*n\s*raan\s*yaa\s*tə\s*ni|ubə(?:̄\.\s*Y|(?:\.?\s*Y|̄\s*Y))[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|ubə(?:̄\.\s*Y|(?:\.?\s*Y|̄\s*Y))[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?))|2\.?\s*kə́\s*nge\s*ko̰\s*jōó\s*kə́\s*dɔ\s*Yá̰a̰\s*gə̄\s*ń\s*rāān̄\s*yá̰á̰\s*tə́\s*ní|2\.?\s*kə\s*nge\s*ko\s*joo\s*kə\s*dɔ\s*Yaa\s*gə\s*n\s*raan\s*yaa\s*tə\s*ni|2\.?\s*Y[aá](?:̰a̰?\s*Gə̄|a̰?\s*Gə̄)|2\.?\s*Y[aá](?:̰a(?:̰?\s*Gə|̰)?|a(?:̰?\s*Gə|̰)?)))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Ezra"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Esdras|\s*y[aā]\s*Esdras)|Esdras))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Neh"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Nehemi|\s*y[aā]\s*Nehemi)|Nehemi))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Job"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Job|\s*y[aā]\s*Job)|Job))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["PrAzar"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(Ndɔ(?:̄[yȳ]\s*y[aā]\s*Ajariya|[yȳ]\s*y[aā]\s*Ajariya))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Prov"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(G[oō]s(?:ə(?:̄?\s*najə(?:̄\s*gə̄?|\s*gə̄?)|̄)?)?)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Eccl"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Kohelet|\s*y[aā]\s*Kohelet)|Kohelet))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["SgThree"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(P[aā]\s*Y[aā]\s*Bals[aá][aá]\s*Kə(?:́\s*Mət[aá]\s*Gə̄?\s*3|\s*Mət[aá]\s*Gə̄?\s*3))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Song"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(P[aā]\s*kə(?:́\s*majə(?:\s*tɔ[yȳ]\s*p[aā]\s*gə̄?)?|\s*majə(?:\s*tɔ[yȳ]\s*p[aā]\s*gə̄?)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Ps"],
            testament: "oa",
            testament_books: { Ps: "oa" },
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət(?:ūbə̄\s*Pā\s*gə̄\s*kə́\s*yā\s*tɔ̄yń\s*Nə́ɓā|ubə\s*Pa\s*gə\s*kə\s*ya\s*tɔyn\s*Nəɓa)|P(?:[aā]\s*Gə̄|[aā](?:\s*Gə)?)))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Jer"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Jeremi|\s*y[aā]\s*Jeremi)|Jer(?:emi)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Ezek"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Ejekiel|\s*y[aā]\s*Ejekiel)|Eje(?:kiel)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Dan"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Daniel|\s*y[aā]\s*Daniel)|Dan(?:iel)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Hos"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Ojee|\s*y[aā]\s*Ojee)|Ojee?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Joel"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Joel|\s*y[aā]\s*Joel)|Jo(?:el)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Amos"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Amos|\s*y[aā]\s*Amos)|Am(?:os)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Obad"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Abədias|\s*y[aā]\s*Abədias)|Abədias))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Jonah"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Jonas|\s*y[aā]\s*Jonas)|Jonas))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Mic"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(M(?:akət[uū]bə(?:̄\s*y[aā]\s*Mise|\s*y[aā]\s*Mise)|ise?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Nah"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Nahum|\s*y[aā]\s*Nahum)|Nah(?:um)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Hab"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Habakuk|\s*y[aā]\s*Habakuk)|Hab(?:akuk)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Zeph"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Soponi|\s*y[aā]\s*Soponi)|Sop(?:oni)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Hag"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Aje|\s*y[aā]\s*Aje)|Aje))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Zech"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Jakari|\s*y[aā]\s*Jakari)|Jaka(?:ri)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Mal"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(Ma(?:kət[uū]bə(?:̄\s*y[aā]\s*Malasi|\s*y[aā]\s*Malasi)|l(?:asi)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Matt"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Najə(?:̄\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Matiye\s*ndang\s*n[ií]|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Matiye\s*ndang\s*n[ií])|\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Matiye\s*ndang\s*n[ií]|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Matiye\s*ndang\s*n[ií]))|Mat(?:iye)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Mark"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Najə(?:̄\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Mark\s*ndang\s*n[ií]|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Mark\s*ndang\s*n[ií])|\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Mark\s*ndang\s*n[ií]|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Mark\s*ndang\s*n[ií]))|Mark))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Luke"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Najə(?:̄\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Luk\s*ndang\s*n[ií]|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Luk\s*ndang\s*n[ií])|\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Luk\s*ndang\s*n[ií]|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Luk\s*ndang\s*n[ií]))|Luk))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1John"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(1Ja(?:̰a̰?|a̰?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2John"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(2Ja(?:̰a̰?|a̰?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["3John"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə̄\s*kə́\s*nge\s*ko̰\s*mətá\s*ń\s*Ja̰a̰\s*ndang\s*ní|ubə\s*kə\s*nge\s*ko\s*məta\s*n\s*Jaa\s*ndang\s*ni)|3(?:(?:\s*Ja̰?a̰|Ja̰?a̰)|(?:\s*Ja̰?a|Ja̰?a))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["John"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Najə(?:̄\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|\s*kə(?:́\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*Majə\s*y[aā]\s*Jeju\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))))|Ja(?:̰?a̰|̰?a)))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1John"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|Ja(?:̰?a̰|̰?a))|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|Ja(?:̰?a̰|̰?a)))|\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|Ja(?:̰?a̰|̰?a))|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|Ja(?:̰?a̰|̰?a)))|1(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|Ja(?:̰?a̰|̰?a))|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|Ja(?:̰?a̰|̰?a)))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2John"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə(?:̄(?:\.\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Ja̰a̰\s*ndang\s*ní|Ja(?:̰?a̰|̰?a))|\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Ja̰a̰\s*ndang\s*ní|Ja(?:̰?a̰|̰?a)))|\.?\s*Ja̰?a̰|\.?\s*Ja̰?a)|ubə\.?\s*kə\s*nge\s*ko\s*joo\s*n\s*Jaa\s*ndang\s*ni|ubə(?:̄\.\s*J|(?:\.?\s*J|̄\s*J))a̰?a̰|ubə(?:̄\.\s*J|(?:\.?\s*J|̄\s*J))a̰?a)|2(?:\.\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))))|\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Ja(?:̰a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])|a(?:̰\s*ndang\s*n[ií]|\s*ndang\s*n[ií])))))|2\.?\s*Ja̰?a̰|2\.?\s*Ja̰?a))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Acts"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))(Kəla(?:\s*(?:r[aā][aā]\s*Ng[aá]mbang\s*kəla\s*gə̄?|R[aā][aā]))?)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Rom"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Rom\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Rom\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Rom\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Rom\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Rom))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Cor"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Kor[eḛ]ntə)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Kor[eḛ]ntə))|\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Kor[eḛ]ntə)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Kor[eḛ]ntə))|1(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Kor[eḛ]ntə)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kor[eḛ]ntə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Kor[eḛ]ntə))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Cor"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(1Ko)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Cor"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə(?:̄(?:\.\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Pol\s*ndang\s*adə̄\s*Korḛntə\s*gə̄\s*ní|Kor[eḛ]ntə)|\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Pol\s*ndang\s*adə̄\s*Korḛntə\s*gə̄\s*ní|Kor[eḛ]ntə))|\.?\s*Kor[eḛ]ntə)|ubə\.?\s*kə\s*nge\s*ko\s*joo\s*n\s*Pol\s*ndang\s*adə\s*Korentə\s*gə\s*ni|ubə(?:̄\.\s*K|(?:\.?\s*K|̄\s*K))or[eḛ]ntə)|2\.?\s*kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Pol\s*ndang\s*adə̄\s*Korḛntə\s*gə̄\s*ní|2\.?\s*kə\s*nge\s*ko\s*joo\s*n\s*Pol\s*ndang\s*adə\s*Korentə\s*gə\s*ni|2\.?\s*Kor[eḛ]ntə))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Cor"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(2Ko)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Col"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kolosə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kolosə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Kolosə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Kolosə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Kolos?ə))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Gal"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Galatə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Galatə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Galatə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Galatə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Gal(?:atə)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Eph"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Epejə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Epejə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Epejə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Epejə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Ep(?:ejə)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Phil"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Pilipə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Pilipə\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Pilipə\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Pilipə\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Pilipə))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Thess"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Tesalonik)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Tesalonik))|\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Tesalonik)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Tesalonik))|1(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Tesalonik)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|Tesalonik))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Thess"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(1Tes)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Thess"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə(?:̄(?:\.\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Pol\s*ndang\s*adə̄\s*Tesalonik\s*gə̄\s*ní|Tesalonik)|\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Pol\s*ndang\s*adə̄\s*Tesalonik\s*gə̄\s*ní|Tesalonik))|\.?\s*Tesalonik)|ubə\.?\s*kə\s*nge\s*ko\s*joo\s*n\s*Pol\s*ndang\s*adə\s*Tesalonik\s*gə\s*ni|ubə(?:̄\.\s*T|(?:\.?\s*T|̄\s*T))esalonik)|2(?:\.\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))))|\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií]))|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])|\s*Tesalonik\s*gə(?:̄\s*n[ií]|\s*n[ií])))))|2\.?\s*Tesalonik))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Thess"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(2Tes)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Tim"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|Tim(?:ote)?)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|Tim(?:ote)?))|\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|Tim(?:ote)?)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|Tim(?:ote)?))|1(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|Tim(?:ote)?)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|Tim(?:ote)?))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Tim"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət(?:ūbə(?:̄(?:\.\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Pol\s*ndang\s*adə̄\s*Timote\s*ní|Tim(?:ote)?)|\s*(?:kə́\s*nge\s*ko̰\s*jōó\s*ń\s*Pol\s*ndang\s*adə̄\s*Timote\s*ní|Tim(?:ote)?))|\.?\s*Timote|\.?\s*Tim)|ubə\.?\s*kə\s*nge\s*ko\s*joo\s*n\s*Pol\s*ndang\s*adə\s*Timote\s*ni|ubə(?:̄\.\s*T|(?:\.?\s*T|̄\s*T))imote|ubə(?:̄\.\s*T|(?:\.?\s*T|̄\s*T))im)|2(?:\.\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])))|\s*kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií])|\s*j[oō][oó]\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Timote\s*n[ií]|\s*Timote\s*n[ií]))))|2\.?\s*Timote|2\.?\s*Tim))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Titus"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Titə\s*n[ií]|\s*Titə\s*n[ií])|\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Titə\s*n[ií]|\s*Titə\s*n[ií]))|Titə?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Phlm"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Pilemo(?:̰\s*n[ií]|\s*n[ií])|\s*Pilemo(?:̰\s*n[ií]|\s*n[ií]))|\s*[nń]\s*Pol\s*ndang\s*adə(?:̄\s*Pilemo(?:̰\s*n[ií]|\s*n[ií])|\s*Pilemo(?:̰\s*n[ií]|\s*n[ií])))|Pil(?:emo̰|(?:emo)?)))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Heb"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*kə(?:́\s*ndang\s*adə(?:̄n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?)|n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?))|\s*ndang\s*adə(?:̄n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?)|n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?)))|\s*kə(?:́\s*ndang\s*adə(?:̄n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?)|n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?))|\s*ndang\s*adə(?:̄n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?)|n(?:̄\s*Hebəro\s*gə̄?|\s*Hebəro\s*gə̄?))))|Heb(?:əro)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Jas"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Jakə\s*ndang\s*n[ií]|\s*[nń]\s*Jakə\s*ndang\s*n[ií])|Jakə?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Pet"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií])|Piyer)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií])|Piyer))|\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií])|Piyer)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií])|Piyer))|1(?:\.\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií])|Piyer)|\s*(?:kə(?:́\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*ta\s*kəga\s*dɔ\s*[nń]\s*Piyer\s*ndang\s*n[ií])|Piyer))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Pet"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(1Pi)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Pet"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií])|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]))|Piyer)|\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií])|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]))|Piyer))|\.\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií])|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]))|Piyer)|\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií])|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]))|Piyer))|2(?:\.\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií])|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]))|Piyer)|\s*(?:kə(?:́\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií])|\s*nge\s*ko(?:̰\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]|\s*j[oō][oó]\s*[nń]\s*Piyer\s*ndang\s*n[ií]))|Piyer))))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Pet"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(2Pi)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Jude"],
            testament: "n",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*[nń]\s*Jud\s*ndang\s*n[ií]|\s*[nń]\s*Jud\s*ndang\s*n[ií])|Jud))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Tob"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(Tobi)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Jdt"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(Juditə)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Bar"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(Bar(?:uk)?)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Sus"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}]))(Sujan)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Macc"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*Makabe\s*Gə̄?|\s*Makabe\s*Gə̄?)|\.\s*Makabe\s*Gə̄?|\s*Makabe\s*Gə̄?)|1(?:\.\s*Makabe\s*Gə̄?|\s*Makabe\s*Gə̄?)))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Macc"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))((?:Makət[uū]bə(?:̄(?:\.\s*Makabe\s*Gə̄?|\s*Makabe\s*Gə̄?)|\.\s*Makabe\s*Gə̄?|\s*Makabe\s*Gə̄?)|2(?:\.\s*Makabe\s*Gə̄?|\s*Makabe\s*Gə̄?)))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["1Macc"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(1Mak)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["2Macc"],
            testament: "a",
            regexp: /(?:^|(?<=[^\p{L}\p{N}])(?<!\d:(?=\d)))(2Mak)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["EsthGr"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))(Ester\s*kə\s*ta\s*Gərek)(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          },
          {
            osis: ["Esth"],
            testament: "o",
            regexp: /(?:^|(?<=[^\p{L}]))((?:Makət[uū]bə(?:̄\s*y[aā]\s*Ester|\s*y[aā]\s*Ester)|Est(?:er)?))(?:(?=[\d\s\.?:,;\x1e\x1f&\(\)（）\[\]\/"’'\*=~\-–—])|$)/giu
          }
        ];
  }
};

var bcv_translations = class {
  constructor() {
    this.aliases = { current: { system: "current", osis: "" }, default: { system: "default", osis: "" } };
    this.current_system = "default";
    this.systems = {
          current: {},
          default: {
            order: {
              Gen: 1,
              Exod: 2,
              Lev: 3,
              Num: 4,
              Deut: 5,
              Josh: 6,
              Judg: 7,
              Ruth: 8,
              "1Sam": 9,
              "2Sam": 10,
              "1Kgs": 11,
              "2Kgs": 12,
              "1Chr": 13,
              "2Chr": 14,
              Ezra: 15,
              Neh: 16,
              Esth: 17,
              Job: 18,
              Ps: 19,
              Prov: 20,
              Eccl: 21,
              Song: 22,
              Isa: 23,
              Jer: 24,
              Lam: 25,
              Ezek: 26,
              Dan: 27,
              Hos: 28,
              Joel: 29,
              Amos: 30,
              Obad: 31,
              Jonah: 32,
              Mic: 33,
              Nah: 34,
              Hab: 35,
              Zeph: 36,
              Hag: 37,
              Zech: 38,
              Mal: 39,
              Matt: 40,
              Mark: 41,
              Luke: 42,
              John: 43,
              Acts: 44,
              Rom: 45,
              "1Cor": 46,
              "2Cor": 47,
              Gal: 48,
              Eph: 49,
              Phil: 50,
              Col: 51,
              "1Thess": 52,
              "2Thess": 53,
              "1Tim": 54,
              "2Tim": 55,
              Titus: 56,
              Phlm: 57,
              Heb: 58,
              Jas: 59,
              "1Pet": 60,
              "2Pet": 61,
              "1John": 62,
              "2John": 63,
              "3John": 64,
              Jude: 65,
              Rev: 66,
              Tob: 67,
              Jdt: 68,
              GkEsth: 69,
              Wis: 70,
              Sir: 71,
              Bar: 72,
              PrAzar: 73,
              Sus: 74,
              Bel: 75,
              SgThree: 76,
              EpJer: 77,
              "1Macc": 78,
              "2Macc": 79,
              "3Macc": 80,
              "4Macc": 81,
              "1Esd": 82,
              "2Esd": 83,
              PrMan: 84
            },
            chapters: {
              Gen: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26],
              Exod: [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38],
              Lev: [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34],
              Num: [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13],
              Deut: [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12],
              Josh: [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33],
              Judg: [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25],
              Ruth: [22, 23, 18, 22],
              "1Sam": [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13],
              "2Sam": [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25],
              "1Kgs": [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53],
              "2Kgs": [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30],
              "1Chr": [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30],
              "2Chr": [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23],
              Ezra: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
              Neh: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],
              Esth: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],
              Job: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17],
              Ps: [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6],
              Prov: [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31],
              Eccl: [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14],
              Song: [17, 17, 11, 16, 16, 13, 13, 14],
              Isa: [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24],
              Jer: [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34],
              Lam: [22, 22, 66, 22, 22],
              Ezek: [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35],
              Dan: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13],
              Hos: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],
              Joel: [20, 32, 21],
              Amos: [15, 16, 15, 13, 27, 14, 17, 14, 15],
              Obad: [21],
              Jonah: [17, 10, 10, 11],
              Mic: [16, 13, 12, 13, 15, 16, 20],
              Nah: [15, 13, 19],
              Hab: [17, 20, 19],
              Zeph: [18, 15, 20],
              Hag: [15, 23],
              Zech: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],
              Mal: [14, 17, 18, 6],
              Matt: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20],
              Mark: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
              Luke: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53],
              John: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25],
              Acts: [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31],
              Rom: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],
              "1Cor": [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],
              "2Cor": [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14],
              Gal: [24, 21, 29, 31, 26, 18],
              Eph: [23, 22, 21, 32, 33, 24],
              Phil: [30, 30, 21, 23],
              Col: [29, 23, 25, 18],
              "1Thess": [10, 20, 13, 18, 28],
              "2Thess": [12, 17, 18],
              "1Tim": [20, 15, 16, 16, 25, 21],
              "2Tim": [18, 26, 17, 22],
              Titus: [16, 15, 15],
              Phlm: [25],
              Heb: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],
              Jas: [27, 26, 18, 17, 20],
              "1Pet": [25, 25, 22, 19, 14],
              "2Pet": [21, 22, 18],
              "1John": [10, 29, 24, 21, 21],
              "2John": [13],
              "3John": [15],
              Jude: [25],
              Rev: [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21],
              Tob: [22, 14, 17, 21, 22, 18, 16, 21, 6, 13, 18, 22, 17, 15],
              Jdt: [16, 28, 10, 15, 24, 21, 32, 36, 14, 23, 23, 20, 20, 19, 14, 25],
              GkEsth: [22, 23, 15, 17, 14, 14, 10, 17, 32, 13, 12, 6, 18, 19, 16, 24],
              Wis: [16, 24, 19, 20, 23, 25, 30, 21, 18, 21, 26, 27, 19, 31, 19, 29, 21, 25, 22],
              Sir: [30, 18, 31, 31, 15, 37, 36, 19, 18, 31, 34, 18, 26, 27, 20, 30, 32, 33, 30, 31, 28, 27, 27, 34, 26, 29, 30, 26, 28, 25, 31, 24, 33, 31, 26, 31, 31, 34, 35, 30, 22, 25, 33, 23, 26, 20, 25, 25, 16, 29, 30],
              Bar: [22, 35, 37, 37, 9],
              PrAzar: [68],
              Sus: [64],
              Bel: [42],
              SgThree: [39],
              EpJer: [73],
              "1Macc": [64, 70, 60, 61, 68, 63, 50, 32, 73, 89, 74, 53, 53, 49, 41, 24],
              "2Macc": [36, 32, 40, 50, 27, 31, 42, 36, 29, 38, 38, 45, 26, 46, 39],
              "3Macc": [29, 33, 30, 21, 51, 41, 23],
              "4Macc": [35, 24, 21, 26, 38, 35, 23, 29, 32, 21, 27, 19, 27, 20, 32, 25, 24, 24],
              "1Esd": [58, 30, 24, 63, 73, 34, 15, 96, 55],
              "2Esd": [40, 48, 36, 52, 56, 59, 70, 63, 47, 59, 46, 51, 58, 48, 63, 78],
              PrMan: [15],
              Ps151: [7]
            }
          }
        };
    this.systems.current = structuredClone(this.systems.default);
  }
};

var bcv_grammar_options_default = {
  ab: /^(?:(?:a|b|c|d|e))(?!\p{L})/iu,
  and: /^(?:(?:(?:&\.?\s*)|&))/i,
  c_explicit: /^[\s*]*(?:(?:chapter\.?\s*))[\s*]*/i,
  c_sep_eu: /^\x1f\x1f\x1f/i,
  c_sep_us: /^\x1f\x1f\x1f/i,
  cv_sep_weak: /^(?:[\s*]*["'][\s*]*|[\s*])+/i,
  cv_sep_eu: /^[\s*]*,+[\s*]*/i,
  cv_sep_us: /^[\s*]*(?::+|\.(?!\s*\.\s*\.))[\s*]*/i,
  ff: /^[\s*]*(?:(?:ff\.?\s*))(?![\p{L}\p{N}])(?:\.(?!\s*\.))?/iu,
  in_book_of: /^[\s*]*(?:from|of|in)[\s*]*(?:the[\s*]*book[\s*]*of[\s*]*)?/i,
  next: /^(?:\x1f\x1f\x1f)/i,
  ordinal: /^(?:th|st|nd|rd)/i,
  range: /^[\s*]*(?:[\-–—]|(?:[\-–—]\.?\s*))+[\s*]*/i,
  sequence_eu: /^(?:[;/:&\-–—~\s*]|\.(?!\s*\.\s*\.)|(?:&\.?\s*))+/i,
  sequence_us: /^(?:[,;/:&\-–—~\s*]|\.(?!\s*\.\s*\.)|(?:&\.?\s*))+/i,
  space: /^[\s*]+/,
  title: /^[\s*]*(?:(?:title\.?\s*))(?!\p{L})[\s*]*/iu,
  v_explicit: /^[\s*]*(?:(?:verse\.?\s*))[\s*]*(?!\p{L})/iu
};
var regexps = bcv_regexps;
var translations = bcv_translations;
var grammar_options = bcv_grammar_options_default;
export {
  grammar_options,
  regexps,
  translations
};