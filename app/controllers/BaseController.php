<?php

class BaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

	public function __construct()
    {
        // NewRelic Extension?
        if ( extension_loaded( 'newrelic' ) )
        {
        	newrelic_set_appname('DYS');
            newrelic_name_transaction( get_class( $this ) );
        }
    }
}
