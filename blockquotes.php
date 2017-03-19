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
     * Add css
     */
    public function onTwigSiteVariables()
    {
        $this->grav['assets']->add('plugin://blockquotes/assets/css/blockquotes.css');
        $this->grav['assets']->add('plugin://blockquotes/assets/css/blockquotes-' . $this->grav['language']->getActive() . '.css');
    }

}
