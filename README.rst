notmyidea-tld
=============

This is a theme for use with the `Pelican <https://blog.getpelican.com/>`__ static site generator that is a derivative from Pelican's built-in ``notmyidea`` theme.  

This theme has the following changes from Pelican's built-in ``notmyidea`` theme:

1. Replaces the default footnote text with the contents of a new ``FOOTNOTE`` setting (defaults to no footnote)

installation
------------

1. Download this theme directly via git (or include it in your project as a `git submodule <https://git-scm.com/book/en/v2/Git-Tools-Submodules>`__):

   .. code:: bash

       git clone https://github.com/trevorld/notmyidea-tld

2. Tell Pelican to use this theme by setting ``THEME`` in your ``pelicanconf.py`` file (or use it with the ``-t`` flag in your ``pelican`` call):

   .. code:: python

       THEME = "path/to/notmyidea-tld" 
