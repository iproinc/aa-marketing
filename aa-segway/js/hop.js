// Pages that are using this code:

$(document).ready(function () {

  let hop = $.cookie("hop");
  let existing_hop = get_param_by_name("hop");
  let start = window.location.search.indexOf('&');
  let queryString = window.location.search;

  // console.log("hop cookie: " + hop);
  // console.log("hop param: " + existing_hop);

  if (hop == undefined) {
    // hop cookie is undefiend
    // console.log("undefine hop: " + hop);
    // console.log("hop param: " + existing_hop);
    // console.log("is there '&' param: " + start);
    // console.log("qs: " + queryString);

    if (queryString) {
      // console.log("there is queryString");
      if (!existing_hop) {
        // if there is queryString and hop does not exist
        console.log("there is no hop")
        // window.location = window.location + "&hop=0";
      } else {
        hop = existing_hop;
      }
    } else {
      console.log("no queryString");
      if (!existing_hop) {
        if (start < 0) {
          // if there is no queryString && no & and hop param does not exist
          // console.log("no queryString no hop")
          window.location = window.location + "?hop=0";
        }
      }
    }
  } else {
    // hop cookie exists

    if (queryString) {
      // there is cookie, qstring, no hop
      if (hop.length > 0 && !existing_hop) {
        console.log("cookie start: " + start);
        console.log("hop: " + hop);
        console.log("hop length: " + hop.length);
        console.log("param: " + existing_hop);

        window.location = window.location + "&hop=" + hop;

      }
    } else {
      // cookie exists and no qstring
      console.log("no queryString");
      if (!existing_hop) {
        if (start < 0) {
          // if there is no queryString && no & and hop param does not exist
          console.log("no queryString no hop")
          window.location = window.location + "?hop=" + hop;
        }
      }
    }
  }

  let input = document.getElementById("form_field[35378]");
  input.value = hop;
});