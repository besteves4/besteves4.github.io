---
layout: post
title: "OPAL 2025 - The first workshop on ODRL policies and beyond"
date: 2025-06-09
excerpt: "Unsolicited opinion on the work presented around ODRL policies at the 1st OPAL workshop co-located with ESWC 2025."
categories: blog
tags: [conferences, ODRL, OPAL, policies]
image: /assets/images/blog/2025/opal/group.jpeg
navbar_title: Blog
---

2025 marked my second attendance of the [Extended Semantic Web Conference (ESWC 2025)](https://2025.eswc-conferences.org/)
and was it a good one! Besides the opportunity to meet friends and colleagues once again, the highlight for me was without
doubts the opportunity to attend the [1st OPAL workshop](https://opal-workshop.github.io/2025/) where 
[ODRL](https://www.w3.org/TR/odrl-model/) was the star of the show!

Here are some notes from OPAL and the conference in general. Needless to say, I am already looking forward to the next one 😊

### OPAL 2025 at ESWC 2025

The [ODRL And Beyond: Practical Applications And Challenges For Policy-Based Access And Usage Control (OPAL 2025)](https://opal-workshop.github.io/2025/)
workshop was for the very first time organised at the [Extended Semantic Web Conference (ESWC 2025)](https://2025.eswc-conferences.org/)
by the lovely
[Andrea Cimmino](https://oeg.fi.upm.es/index.php/en/phd/389-acimmino/index.html),
[Nicoletta Fornara](https://search.usi.ch/en/people/542f4f5b9685647629421ff52b1bff53/fornara-nicoletta),
[Víctor Rodríguez-Doncel](https://cosasbuenas.es), and
[John Domingue](https://kmi.open.ac.uk/people/member/john-domingue),
with a call for contributions focus on topics like
- Data governance and management in centralised and decentralised Knowledge Graphs
- Policy enforcement and conflict resolution in real-world applications
- Formalization of user and organisational preferences for data sharing using [ODRL](https://www.w3.org/TR/odrl-model/)

and more. Throughout the day, the workshop had an average of 17 attendees, which had the opportunity to see the presentations of
8 regular and 2 short papers. The proceedings of the workshop are now online at 
[https://ceur-ws.org/Vol-3977/](https://ceur-ws.org/Vol-3977/), so you can check out all contributions there.

Beyond that, there was a round table to discuss current challenges and futures directions for [ODRL](https://www.w3.org/TR/odrl-model/),
which are summarised [here](https://github.com/opal-workshop/2025/issues).
These will prove themselves as very useful to guide new discussions at the [W3C ODRL CG](https://www.w3.org/community/odrl/) 
and hopefully will help shape any new iterations of [ODRL](https://www.w3.org/TR/odrl-model/).

Here's a nice picture of the OPAL attendees!

<figure>
  <img 
    src="/assets/images/blog/2025/opal/group.jpeg" 
    class="figure-img img-fluid img-thumbnail" 
    style="border-radius: 40px; width: 40vw; display: block; margin-left: auto; margin-right: auto;"
    data-toggle="tooltip" 
    data-placement="top"
    alt="Group picture of OPAL participants">
  <figcaption style="text-align:center;"><i>Group picture of OPAL participants</i></figcaption>
</figure>

Finally, here are some highlights of the workshop (they reflect my opinion only 😉)

#### Terms of Service as ODRL policies

The first highlight of the workshop was hearing about the work that Elena Molino-Peña *et al.*
are doing around Terms of Service. Check out their [paper](https://ceur-ws.org/Vol-3977/OPAL2025-10.pdf) and
the [Terms of Service Language ontology (TOSL)](https://w3id.org/tosl).

Their focus was on building an [ODRL profile](https://w3c.github.io/odrl/profile-bp/)
to tackle the representation of contractual terms of Software as a Service Terms of Service (ToS),
enabling the precise definition of terms related to arbitration, applicable law, content removal,
liability and modification/termination clauses.
The ultimate goal is to prevent the inclusion of unfair terms in ToSs
and support legal requirements such as the ones coming from the
[EU Directive on Unfair Contract Terms](http://data.europa.eu/eli/dir/2019/2161/oj).

The [Terms of Service Language ontology (TOSL)](https://w3id.org/tosl) proved itself useful to model real-world use cases,
as well as a basis to detect abusive terms.
Check out a cool example derived from [GitHub’s ToS](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)
(extracted from the [paper](https://ceur-ws.org/Vol-3977/OPAL2025-10.pdf)):

{% highlight turtle %}
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix odrl:    <http://www.w3.org/ns/odrl/2/> .
@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix tosl:    <https://w3id.org/tosl#> .
@prefix :        <https://ex.org/> .

# Agreement definition
:agreement01 a odrl:Agreement ;
  odrl:assignee :customer01 ;
  odrl:assigner :github ;
  tosl:liability :liability01 ;
  tosl:onDispute :litigation01 .

# Liability definition
:liability01 a tosl:Liability ;
  dcterms:description "GitHub's maximum liability to Customer for any incident (...) will not exceed the amount Customer paid for the Product during the 12 months before the incident" ;
  rdf:value tosl:anyLiability ;
  tosl:liableParty :github ;
  tosl:targetParty :customer01 ;
  tosl:limitation [
    a odrl:Constraint ;
    odrl:leftOperand tosl:totalAmount ;
    odrl:operator odrl:lteq ;
    odrl:rightOperand :consumerQuote12Months ;
  ].

# Dispute resolution definition
:litigation01 a tosl:Litigation;
  dcterms:description "If Customer's principal office is European Union (...) Agreement will be governed by the laws of Ireland" ;
  tosl:takesPlaceIn :DublinCourts ;
  tosl:governedBy :IrelandLaw ;
  tosl:targetParty :customer01 ;
  tosl:condition [
    a odrl:Constraint ;
    odrl:leftOperand tosl:consumerResidentCountry ;
    odrl:operator odrl:isAnyOf ;
    odrl:rightOperand "ES", "DE", "PT", "IT"
  ].

:DublinCourts a tosl:Jurisdiction;
  dcterms:description "Disputes jurisdiction of the Dublin courts" .
:IrelandLaw a tosl:Law ;
  dcterms:description "Governed by the laws of Ireland" .
{% endhighlight %}

I still want to check how some of these terms can be added to [DPV](https://w3id.org/dpv#),
as well as how to integrate the usage of terms that are already in DPV, i.e., 
[DPV's location extension](https://w3id.org/dpv/loc#) would be great to re-use for identifying countries and
unions such as the [European Union](https://w3id.org/dpv/loc#EU).

#### Formal semantics of ODRL

My second highlight goes to work being done on a [formal semantics for ODRL](https://w3c.github.io/odrl/formal-semantics/).
On this topic, there were two especially interesting works being presented:
- *Piero Andrea Bonatti, Nicoletta Fornara, and Andreas Harth*,
["Towards a Formal Semantics of the Open Digital Rights Language (ODRL 2.2)"](https://ceur-ws.org/Vol-3977/OPAL2025-4.pdf), and
- *Andrea Cimmino, Nicoletta Fornara*,
["Improving ODRL 2.2: current limitations and theoretical solutions"](https://ceur-ws.org/Vol-3977/OPAL2025-6.pdf)

[Bonatti *et al.*](https://ceur-ws.org/Vol-3977/OPAL2025-4.pdf) focused on the *current informal semantics* of ODRL
and provide first steps for a *declarative semantics* of ODRL, namely looking at how to formalize
- constraint operators,
- left operands and world states,
- permissions and prohibitions without duties and remedies,
- introducing temporal constraints to comply with duties,
amongst others.

As for [Cimmino and Fornara]((https://ceur-ws.org/Vol-3977/OPAL2025-6.pdf)),
they highlighted gaps on ODRL to be solved on a *future version 3.0*,
categorising them in terms of *descriptive* and *behavioural* semantics,
and offered a series of proposals to tackle them, namely by:
- Refining the operands, operators and actions in the [ODRL vocabulary](https://www.w3.org/TR/odrl-vocab/)
- Introducing and describing the concept of state of the world as a Knowledge Graph
- Introducing a *policy status* concept
- Extending ODRL to support the specification of various types of policies
- Introducing SPARQL-based evaluation rules
- Introducing the notion of policy templates & variables

### Interoperable policy engines at ESWC

Not at OPAL, but also related to policies,
in the [main conference](https://2025.eswc-conferences.org/),
we presented our latest work, led by [Wout Slabbinck](https://woutslabbinck.com),
on [interoperable policy engines](https://doi.org/10.1007/978-3-031-94578-6_11)
(check out an [open-access version](https://raw.githubusercontent.com/woutslabbinck/papers/main/2025/Interoperable-Interpretation-and-Evaluation-of-ODRL-Policies.pdf)).

This paper proposes a systematic approach to evaluating ODRL policies,
looking at the [formal semantics for ODRL draft specification](https://w3c.github.io/odrl/formal-semantics/),
to enable meaningful negotiation over privacy preferences on the Web,
introducing a [Compliance Report Model](https://w3id.org/force/compliance-report), 
a [test suite](https://w3id.org/force/test-suite/repo),
and our very own implementation of an [ODRL Evaluator](https://w3id.org/force/evaluator)
to support accurate, interoperable, and enforceable policy interpretations in line with regulatory requirements.

We got very good feedback to make future improvements to the work,
also in the form of a 🌟 nomination for best resource paper 🌟,
and are currently in discussions to integrate the [Compliance Report Model](https://w3id.org/force/compliance-report)
in the work being done on the [ODRL formal semantics specification](https://w3c.github.io/odrl/formal-semantics/)
by the [W3C ODRL CG](https://www.w3.org/community/odrl/).

Quite recently we also started to work on a [demo](https://w3id.org/force/ESWC2025-demo)
that allows users to test this work on the Web.
More on that on a future post 😜

### Looking towards the future

That's a wrap! I'm looking forward to seeing what the second half of 2025 (and 2026) brings us in terms of work
on policies and particular on ODRL.

Beatriz