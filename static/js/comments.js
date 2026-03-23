var CommentSystem = {
	email_user:   "not set",
	email_domain: "not set",
	display_replyto_html: function(comment_content, article_slug, author) {return ''},

	cancelReply: function() {
		document.getElementById('pcs-comment-form-input-replyto').value = "";
		document.getElementById('pcs-comment-form-display-replyto').style.display = 'none';
	},

	setReply: function(slug, author) {
		slug   = decodeURIComponent(slug);
		author = decodeURIComponent(author);

		var form = document.getElementById('pcs-comment-form');
		form.scrollIntoView({ behavior: 'smooth' });

		document.getElementById('pcs-comment-form-input-replyto').value = slug;

		var commentEl = document.querySelector('#comment-' + CSS.escape(slug) + ' .pcs-comment-content');
		var commentContent = commentEl ? commentEl.textContent.trim() : '';

		var replytoEl = document.getElementById('pcs-comment-form-display-replyto');
		replytoEl.innerHTML = this.display_replyto_html(commentContent, slug, author);
		replytoEl.style.display = '';
	},

	getMailtoLink: function(slug) {
		var subject = 'Comment for \'' + slug + '\'' ;

		var now = new Date();
		tzo = -now.getTimezoneOffset(),
		dif = tzo >= 0 ? '+' : '-',
		pad = function(num) {
			norm = Math.abs(Math.floor(num));
			return (norm < 10 ? '0' : '') + norm;
		};
		var body = ''
			+ 'Hey,\nI posted a new comment on ' + document.URL + '\n\nGreetings ' + document.getElementById('pcs-comment-form-input-name').value + '\n\n\n'
			+ 'Raw comment data:\n'
			+ '----------------------------------------\n'
			+ 'email: \n' // just that I don't forget to write it down
			+ 'date: ' + now.getFullYear()
					+ '-' + pad(now.getMonth()+1)
					+ '-' + pad(now.getDate())
					+ 'T' + pad(now.getHours())
					+ ':' + pad(now.getMinutes())
					+ dif + pad(tzo / 60)
					+ ':' + pad(tzo % 60) +'\n'
			+ 'author: ' + document.getElementById('pcs-comment-form-input-name').value + '\n';

		var replyto = document.getElementById('pcs-comment-form-input-replyto').value;
		if (replyto.length != 0)
		{
			body += 'replyto: ' + replyto + '\n'
		}

		var url = document.getElementById('pcs-comment-form-input-website').value;
		if (url.length != 0)
		{
			if(url.substr(0,7) != 'http://' && url.substr(0,8) != 'https://'){
				url = 'http://' + url;
			}
			body += 'website: ' + url + '\n';
		}
		body += '\n'
			+ document.getElementById('pcs-comment-form-input-textarea').value + '\n'
			+ '----------------------------------------\n';

		var link = 'mailto:' + this.email_user + '@' + this.email_domain + '?subject='
			+ encodeURIComponent(subject)
			+ "&body="
			+ encodeURIComponent(body.replace(/\r?\n/g, "\r\n"));
		console.log(link)
		return link;
	}
}
