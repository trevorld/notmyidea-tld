notmyidea-tld
=============

This is a theme for use with the `Pelican`__ static site generator that is a derivative from Pelican's built-in ``notmyidea`` theme.  

This theme has the following changes from Pelican's built-in ``notmyidea`` theme:

1. Replaces the default footnote text with the contents of a new ``FOOTNOTE`` setting (defaults to no footnote)
#. Improved CSS styling for restructuredText's ``admonition``, ``contents``, ``figure``, and ``list-table`` `directives <http://docutils.sourceforge.net/docs/ref/rst/directives.html>`__.
#. Add support for the `Pelican Comment System`_ plugin.

.. _Pelican: https://blog.getpelican.com/
.. _Pelican Comment System: https://github.com/Scheirle/pelican_comment_system

installation
------------

1. Download this theme directly via git (or include it in your project as a `git submodule <https://git-scm.com/book/en/v2/Git-Tools-Submodules>`__):

   .. code:: bash

       git clone https://github.com/trevorld/notmyidea-tld

2. Tell Pelican to use this theme by setting ``THEME`` in your ``pelicanconf.py`` file (or use it with the ``-t`` flag in your ``pelican`` call):

   .. code:: python

       THEME = "path/to/notmyidea-tld" 

3. If you to use the `Pelican Comment System`_ install it:

   .. code:: bash

       pip3 install pelican_comment_system Pillow

    and enable it in your ``pelicanconf.py`` file:

   .. code:: python

       PLUGINS = ['pelican_comment_system']
       PELICAN_COMMENT_SYSTEM = True
       PELICAN_COMMENT_SYSTEM_IDENTICON_DATA = ('author',)
       PELICAN_COMMENT_SYSTEM_EMAIL_USER = "user"
       PELICAN_COMMENT_SYSTEM_EMAIL_DOMAIN = "example.com"

license
-------

This theme contains open-source content from:

1. Pelican_'s builtin `notmyidea theme <https://github.com/getpelican/pelican/tree/master/pelican/themes/notmyidea>`_
2. `Pelican Comment System`_'s `theme snippets <https://github.com/Scheirle/pelican_comment_system/tree/master/theme>`_
3. Additional modifications by me.  I personally do not add any license restrictions on top of the open-source licenses of those themes from the above projects.
