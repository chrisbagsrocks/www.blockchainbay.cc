(function($){
    "use strict";
    //Code here

function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}


jQuery(document).ready(function ($) {
    var appendthis = ("<div class='modal-overlay js-modal-close'></div>");


    /**
     *
     * @type {jQuery}
     * Get shortcode data from custom attribute
     */
    var orderby = $(".js-open-modal").data("orderby");
    var ordering = $(".js-open-modal").data("order");
    var url = $(".js-open-modal").data("url");
    var mode = $(".js-open-modal").data("mode");
    var list_id = $(".js-open-modal").data("list-id");
    var column = $(".js-open-modal").data("column");
    var style = $(".js-open-modal").data("style");
    var search = $(".js-open-modal").data("search");
    var category = $(".js-open-modal").data("category");
    var upvote = $(".js-open-modal").data("upvote");
    var credittitle = $(".js-open-modal").data("credittitle");
    var creditlink = $(".js-open-modal").data("creditlink");
    var tooltip = $(".js-open-modal").data("tooltipp");

    var item_count = $(".js-open-modal").data("item_count");
    var hide_list_title = $(".js-open-modal").data("hide_list_title");
    var display_username = $(".js-open-modal").data("display_username");
    var item_details_page = $(".js-open-modal").data("item_details_page");
    var filterorderby = $(".js-open-modal").data("filterorderby");
    var filterorder = $(".js-open-modal").data("filterorder");
    var paginate_items = $(".js-open-modal").data("paginate_items");
    var actual_pagination = $(".js-open-modal").data("actual_pagination");
    var per_page = $(".js-open-modal").data("per_page");
    var favorite = $(".js-open-modal").data("favorite");
    var enable_left_filter = $(".js-open-modal").data("enable_left_filter");
    var main_click = $(".js-open-modal").data("main_click");
    var video_click = $(".js-open-modal").data("video_click");
    var enable_tag_filter = $(".js-open-modal").data("enable_tag_filter");
    var list_title_font_size = $(".js-open-modal").data("list_title_font_size");
    var item_orderby = $(".js-open-modal").data("item_orderby");
    var list_title_line_height = $(".js-open-modal").data("list_title_line_height");
    var title_font_size = $(".js-open-modal").data("title_font_size");
    var subtitle_font_size = $(".js-open-modal").data("subtitle_font_size");
    var title_line_height = $(".js-open-modal").data("title_line_height");
    var subtitle_line_height = $(".js-open-modal").data("subtitle_line_height");
    var filter_area = $(".js-open-modal").data("filter_area");
    var topspacing = $(".js-open-modal").data("topspacing");


    $('a[data-modal-id]').click(function (e) {

        e.preventDefault();
        $("body").append(appendthis);
        $(".modal-overlay").fadeTo(500, 0.7);
        //$(".js-modalbox").fadeIn(500);
        var modalBox = $(this).attr('data-modal-id');
        $('#' + modalBox).fadeIn($(this).data());
		
		$('body').addClass('modalOn');
		
    });


jQuery(document).on('click', ".js-modal-close, .modal-overlay", function(event){


   // $(".js-modal-close, .modal-overlay").click(function () {
        $(".modal-box, .modal-overlay").fadeOut(500, function () {
            $(".modal-overlay").remove();
        });
		$('body').removeClass('modalOn');
    });

    $(window).resize(function () {
        $(".modal-box").css({
            //top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
            //left: ($(window).width() - $(".modal-box").outerWidth()) / 2
        });
    });

    $(window).resize();


    $("#generate-igcode").on("click", function () {

        var list_id_ext = "&list_id=";

        if( list_id != "" || list_id != null ){
            list_id_ext = '&list_id=' + list_id;
        }

        var i_height = $("#igheight").val();
        var i_width = $("#igwidth").val();
        var selected_value = $(".iframe-main-select option:selected").text();
        var iframe_template = '<iframe src="' + url + '/?order=' + ordering + '&orderby=' + orderby + '&mode=' + mode + list_id_ext + '&column=' + column +'&tooltip='+ tooltip + '&style=' + style + '&search=' + search + '&category=' + category + '&upvote=' + upvote + '&item_count='+ item_count + '&display_username='+ display_username + '&hide_list_title='+ hide_list_title + '&item_details_page='+ item_details_page + '&filterorderby='+ filterorderby + '&filterorder='+ filterorder + '&paginate_items='+ paginate_items + '&actual_pagination='+ actual_pagination + '&per_page='+ per_page + '&favorite='+ favorite + '&enable_left_filter='+ enable_left_filter + '&main_click='+ main_click + '&video_click='+ video_click + '&enable_tag_filter='+ enable_tag_filter + '&list_title_font_size='+ list_title_font_size + '&item_orderby='+ item_orderby + '&list_title_line_height='+ list_title_line_height + '&title_font_size='+ title_font_size + '&subtitle_font_size='+ subtitle_font_size + '&title_line_height='+ title_line_height + '&subtitle_line_height='+ subtitle_line_height + '&filter_area='+ filter_area + '&topspacing='+ topspacing + '" '
            + ' scrolling="auto" ' + 'height="' + i_height + 'px' + '" width="' + i_width + selected_value + '" frameborder="0"></iframe>';
			
		var ext = '';
		
        if (credittitle.length > 0 || creditlink.length > 0) {
            if (credittitle.length > 0 && creditlink.length > 0) {
                ext += '<span style="float:right; margin:10px;">List Created by <a href="' + creditlink + '" target="_blank">' + credittitle + '</a></span>';
            } else {
                ext += '<span style="float:right; margin:10px;">List Created by <a href="' + creditlink + '" target="_blank">' + creditlink + '</a></span>';
            }

        }
		
        iframe_template += ext;

        $(".igcode_textarea").html(iframe_template);
        copyToClipboard(document.getElementById("igcode_textarea"));
        $("#igcode_textarea").select();

    });


});

})(jQuery);