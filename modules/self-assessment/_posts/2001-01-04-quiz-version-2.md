
# Scenario based assessment

This alternative set of questions tests the most common confusions that I come across working with students.

I still need to add the javascript to turn this into a quiz with feedback.

## Scenario 1. Plant health experiment

A researcher is studying whether a bio-stimulant product can promote
leaf health in tomato plants. A sample size calculation suggests 30
plants will be necessary to detect a meaningful effect. They grow 30
plants, allocating some to receive fertiliser with the others left as
controls. From each plant, they plan to measure the health of five
leaves.

**1) Which of the following statements is true?**

-   The treatment groups should be balanced to avoid bias in the results
-   Having more treated than untreated plants would allow a more precise
    estimate of the treatment effect
-   The treatment groups should be balanced to give the most precise
    measure of treatment effect
-   The number of plants in each group should be decided at random

**2) During which aspect of the study should randomisation be used?**

-   When allocating plants into the treatment groups
-   When arranging the plants in the greenhouse
-   When deciding the order in which to measure the leaves
-   When deciding the order in which to measure the plants

There are several commonly used approaches to measure leaf health:

-   Visually inspecting leaves, and classifying each as healthy or
    unhealthy
-   Grading the health of each leaf on a five-point scale
-   Using an automated image analysis process to estimate the proportion
    of the leaf that is healthy

**3) Classify each of these measures as binary, ordinal, or continuous.**


**4) Which of the following statements are correct?**

-   The experimental unit is each leaf because each leaf provides one
    measurement.
-   The experimental unit is each plant because treatments are randomly
    allocated to plants, not leaves.
-   Treating all leaf measurements as independent observations would
    lead to pseudo-replication.
-   Treating all leaf measurements as independent observations is
    correct since each is measured independently.

**5) Which might be an appropriate statistical analysis to test the effect of fertilizer on leaf size?**

-   An unpaired t-test, comparing the leaf lengths between treatment
    groups
-   A Mann--Whitney test comparing individual leaves between groups
-   A linear mixed model, with fertilizer as a fixed and plant as a
    random effect
-   An unpaired t-test, based on comparing average leaf length per plant
    between groups

Several treated plants die before the end of the experiment and cannot
be measured.

**6) Which of the following statements is true?**

-   Excluding the dead plants is appropriate, because they have no health
data and would distort the analysis if retained.
-   The dead plants should be excluded only if the researcher can
demonstrate that the deaths occurred completely at random with respect
to treatment.
-   Additional plants should be added to make the group sizes equal in
analysis.
-   The missing data should be replaced with the group medians of the
surviving plants

After completing the analysis, the researcher finds that the treated
plants are slightly healthier on average than the untreated plants, but
a test for statistical significance returns a p-value of 0.12, higher
than their threshold of statistical significance.

**7) How should they interpret this result?**

-   The treatment does not improve plant health
-   Not enough plants were used so we cannot make any claims about
    treatment effectiveness
-   It is possible that the treatment works, but there is not enough
    evidence to demonstrate this
-   The treatment probably does not work well enough to be of use

## Scenario 2. Weight loss trial

A clinical study was designed to compare the weight loss achieved using
two diets. Participants were randomly assigned to Diet A (weight loss
programme) or Diet B (usual diet), but male participants happen by
chance to be more likely to be assigned to Diet A.

**1) Which of the following statements are correct?**

-   Randomisation prevents systematic (non-random) differences between
groups.
-   Simple randomisation does not guarantee perfectly equal groups.
-   Chance imbalances can still occur when randomising.
-   Because the groups differ in sex, the randomisation has failed.

**2) Which design measures would be suitable to avoid confounding by sex in the study?**

-   Only including male participants in the study
-   Controlling for the effect of sex in the analysis
-   Blocking the randomisation
-   Avoiding randomisation, and allocating members of each sex
    alternately to treatments

Participants will be measured at the start and the end of the study.

**3) Which analytical strategy would be the most appropriate?**

-   Compare the proportion of the participants that met their target
    weight between groups
-   Compare the average final weight of participants between groups,
    controlling for the starting weight
-   Comparing the average weight loss during the study between groups

A researcher considers using an independent groups t-test to compare the results between two groups.  

**4) What should be true of the data for a t-test to be valid?**

-   The diets should have been independently allocated to each
    participant
-   The variance in the outcome measure should be approximately equal
    between the groups
-   The number of participants must be balanced between the two groups
-   The outcome measure should be approximately normally distributed
-   The outcome measure should be approximately normally distributed
    within each group

**5) How could we test whether the assumptions of the t-test are met?**

-   Plotting the data using box plots between groups
-   Bar charts with error bars indicating standard deviations
-   Statistical tests of normality and equality of variance
-   Diagnostic plots

**6) What approaches could we take if the data does not appear to have the correct distribution?**

-   Remove outlying data points
-   Try to transform the data
-   Use a non-parametric test
-   Use a one-way ANOVA

Participants in diet A lost an extra 5.2 kg (95% CI = 1.5--8.8 kg)
compared to diet B.

**7) Which of the following statements is true?**

-   95% of the study participants lost between 1.5 and 8.8 kg extra with
    diet A compared to diet B.
-   If this intervention was implemented in the population, 95% of
    people would lose between 1.5 and 8.8 kg compared to diet B.
-   We have good evidence that diet A leads to more weight loss than
    diet B.
-   We can be confident that diet A causes between 1.5 and 8.8 kg more
    weight loss than diet B.

Researchers suspect that men and women might have had different responses.  

**8) How might we explore a sex-specific difference:**

-   Estimate separate analyses in men and women
-   A linear model including sex, treatment, and prior weight as
    predictors
-   A linear model with main effects of sex, treatment, and their
    interaction as predictors
-   A 2-way ANOVA including treatment and sex as categorical variables
-   We must not conduct any analysis using this data that was not
    pre-planned

Separate (subgroup) analyses were conducted in men and women.
The average weight loss associated with diet A in men was 4.2 kg (95% CI= -1.0 to 9.4kg).  In women the average weight loss with diet A in women was 5.7kg (95% CI= 0.5 to 10.9 kg).

**9) Which conclusions are correct?**

-   Diet A is effective for weight loss in men
-   Diet A is effective for weight loss in women
-   We have good evidence that the effect of diet is sex-specific
