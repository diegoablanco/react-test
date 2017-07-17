@import "variables";
@import "../../../../src/stylesheets/main.scss";
<% _.each(files, function(file) { %>
@import "../../../../<%=file%>";<%})%>
@import "overrides";