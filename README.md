# nodejs-typescript-seed
NodeJS, typescript based seed. (Micro-services intended)

## Usage
Clone the repository: 
<br>```git clone https://github.com/bargoldi/nodejs-typescript-seed.git```

Run the basic server:
<br>```npm start```

## Why?
Let's take an example.

You just started a new project and you have a TS interface, named `User`.
<br>Today, this `User` interface contains only 2 fields - id and name.

Now, after some progress, you heard of `Micro-Services` and chose to 
adapt the concept.

In a new service you will be using the same `User` interface. So far so good.
<br>BUT! In a few months you will be using a few more services and a few of them even use the same old `User` interface!
Still, so far so good.

Oh, but now your friend says - "Hey Bill, what about the users' phone number?".

I guess you got my cynical voice shouting - "`Code re-usage!, SOLID!`"

Code re-usage and extensibility are troubling us all, especially in the matter of `Micro-Services`

This seed is going to help you initiate your project based on the `Micro-Services` approach.

Take a look at the ``models`` directory. It has it's own `package.json`, `tsconfig.json`, etc...
<br> That's because one day, those interfaces will be used in another service.
<br> And no, I'm not going to initiate a new SERVICE just for those models. So I'd just bundle them up
and `npm publish` them to some private repository.

## How?
As I mentioned above, the 'extensible' modules are going to have their own packaging system.
<br>What the seed really does is actually installing those modules as dependencies and not using them as part of the project.

## Notes
* Don't forget to include `package.json`, `tsconfig.json`, etc... in a new module
* Don't forget to use the modules as dependencies and not as locals
* Don't forget to use UMD imports of TS instead of relative paths
* The seed initializes an Express app but you are free to use pure NodeJS, KoaJS, etc...
