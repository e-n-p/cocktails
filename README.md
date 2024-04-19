Create a CocktailService service allowing you to return a certain number of Cocktail type objects.

A Cocktail type object must have the following characteristics:

     A name field
     A price field
     An image field

The service contains a getCocktails() method returning all available cocktails.

The list of cocktails is displayed in a component named CocktailListComponent.

Let’s take advantage of this quest to also raise awareness about unit testing:

→ Create a file named test.spec.ts, place it in the app/ folder and paste the following code inside:


The service contains a getCocktails() method returning all cocktails
The component must have a property named cocktails
The CocktailService service is injected within the component.
The component uses the service's getCocktails() method and retrieves the cocktails
All cocktails are displayed via the ngFor directive within the template associated with the component
The code for your component must be in the app/cocktail-list/ folder.
The code for your service must be in the app/ folder
The code must pass unit tests. To do this, use the ng test command.