var csrf_token = '<?php echo csrf_token(); ?>';

var localPort = ":8000";

function strToSlug(string) {
            string = string.replace(/ /g, "-");
            string = string.toLowerCase();
            return string;
}
