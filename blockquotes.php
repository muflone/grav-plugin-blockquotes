<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;

class BlockquotesPlugin extends Plugin
{
    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0],
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0],
        ];
    }

    /**
     * Initialize the plugin
     */
    public function onPluginsInitialized()
    {
        // Don't proceed if we are in the admin plugin
        if ($this->isAdmin()) {
            return;
        }
    }

    /**
     * Add css and js files
     */
    public function onTwigSiteVariables()
    {
        $this->grav['assets']->add('plugin://blockquotes/assets/css/blockquotes.css');
        $this->grav['assets']->add('plugin://blockquotes/assets/css/blockquotes-' . $this->grav['language']->getActive() . '.css');
        if ($this->isAdmin()) {
            if ($this->config->get('plugins.blockquotes.enabled') && $this->config->get('plugins.blockquotes.admin_toolbar')) {
              $this->grav['assets']->add('plugin://blockquotes/assets/js/admin.js');
              $this->grav['assets']->add('plugin://blockquotes/assets/css/admin.css');
            }
        }
    }

}
