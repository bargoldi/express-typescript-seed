# express-typescript-seed
Express, typescript based seed. (Micro-services intended)

## Usage
Clone the repository: 
<br>```git clone https://github.com/bargoldi/express-typescript-seed.git```

Run the basic server:
<br>```npm start```

## Why?
Let's take an example.

You are just starting a new project and you have a TS interface, used as ORM, named `User`.
<br>Today, this `User` interface contains 2 fields only - id and name.

Now, let's say you've progressed with the development, heard of `Micro-Services`
and chose to stick with ``that`` plan.

In a new service you're going to use the same `User` interface. So far so good.
<br>BUT! In a few months you're going to have a few more services and a few of them even use the same `User` interface!
Still, so far so good.

Oh, but now your friend says - "Hey Bill, what about the users' phone number?".

I guess you got my cynical voice shouting - "`Code re-usage!, SOLID!`"

Code re-usage and extensibility are issuing us all, especially in the matter of `Micro-Services`

This seed is going to help you initiate your project based on the `Micro-Services` approach.

Take a look at the ``models`` directory. It has it's own `package.json`, `tsconfig.json`, etc...
<br> That's because one day, those interface are going to be used in another service.
<br> And no, I'm not going to initiate a new SERVICE just for those models. So I'd just bundle them up
and `npm publish` them to some private repository.

## How?
As I mentioned above, the 'extensible' modules are going to have their own packaging system.
<br>What the seed really does is actually installing those modules as dependencies and not using them as part of the project.

## Notes
* Don't forget to include `package.json`, `tsconfig.json`, etc... in a new module
* Don't forget to use the modules as dependencies and not as locals
* Don't forget to use UMD import of TS instead of relative path
