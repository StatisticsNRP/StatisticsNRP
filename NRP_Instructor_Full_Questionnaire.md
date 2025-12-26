# NRP Statistics Diagnostic – Instructor Version
Full questionnaire with section-based numbering (e.g., 1.1, 1.2, …) and complete easy + hard questions.


## 1. Attitudes & Professional Practice

### 1.1 – Seeks to Learn & Improve

**E1-KN: Which action best supports statistical learning?**
- A. Avoid unfamiliar analyses
- B. Reflect on weaknesses and seek training
- C. Only use familiar methods
- D. Delegate statistics entirely
**Correct answer:** B

**H1-WL: In a wet-lab project, a researcher resists learning mixed models needed for repeated measures data. What is the consequence?**
- A. No consequence
- B. May lead to incorrect analysis
- C. Improves reproducibility
- D. Required by lab protocol
**Correct answer:** B

### 1.2 – Critical Thinking About Statistics

**E2-KN: Critical statistical thinking involves:**
- A. Accepting all published p-values
- B. Evaluating assumptions and context
- C. Ignoring design flaws
- D. Relying on software defaults
**Correct answer:** B

**H2-HC: A clinical trial reports p=0.04 but provides no information on randomisation or allocation concealment. What is the main concern?**
- A. p<0.05 overrides design
- B. Weak design undermines validity
- C. Trials don't require design details
- D. The p-value gives causal inference
**Correct answer:** B

### 1.3 – Transparency & Reproducibility

**E3-KN: Reproducible analysis requires:**
- A. Relying on memory
- B. Recording full analysis scripts
- C. Saving only final figures
- D. Using different software each time
**Correct answer:** B

**H3-GEN: A genomics pipeline cannot be reproduced because software versions were not recorded. Main issue?**
- A. Minor problem
- B. Lack of version control
- C. Too many scripts
- D. Overfitting
**Correct answer:** B

### 1.4 – Avoiding Misuse of Statistics

**E4-KN: P-hacking refers to:**
- A. Using robust models
- B. Searching analyses for significance
- C. Transforming variables
- D. Responsible outlier removal
**Correct answer:** B

**H4-WL: A team runs many tests until p<0.05 appears. Issue?**
- A. Good exploration
- B. Inflated false positives
- C. Strong evidence
- D. Acceptable practice
**Correct answer:** B

### 1.5 – Responsible Use of AI

**E5-KN: Responsible use of AI involves:**
- A. Accepting outputs blindly
- B. Using AI to assist but verifying results
- C. Replacing analysis with AI
- D. Letting AI choose tests
**Correct answer:** B

**H5-HC: A student uses AI-generated clinical analysis code without checking it. Issue?**
- A. None
- B. Must verify code correctness
- C. AI guarantees accuracy
- D. Faster is better
**Correct answer:** B

### 1.6 – Team-based Statistical Rigor

**E6-KN: Good collaborative practice includes:**
- A. Keeping code private
- B. Sharing documented workflows
- C. Using different software versions
- D. Avoiding communication
**Correct answer:** B

**H6-WL: A collaboration fails because data formats differ across labs. Cause?**
- A. Tools too advanced
- B. Poor workflow standardisation
- C. Sample size too small
- D. Wrong hypothesis test
**Correct answer:** B

## 2. Experimental Design

### 2.1 – Defining Research Questions

**E7-KN: A good statistical question is:**
- A. Vague
- B. Clear and testable
- C. Assumed obvious
- D. Unrelated to data
**Correct answer:** B

**H7-HC: A clinical project lacks a clear hypothesis. Problem?**
- A. None
- B. Hard to choose the right analysis
- C. Easier publication
- D. Larger sample size
**Correct answer:** B

### 2.2 – Identifying Variables

**E8-KN: A response variable is:**
- A. Always categorical
- B. What you measure
- C. What you randomise
- D. A confounder
**Correct answer:** B

**H8-WL: Weekly plant height measurements are:**
- A. Technical variable
- B. Response variable
- C. Blocking factor
- D. Batch effect
**Correct answer:** B

### 2.3 – Choosing Experimental Design

**E9-KN: Factorial designs allow:**
- A. One factor only
- B. Testing interactions
- C. Avoiding replication
- D. Ignoring controls
**Correct answer:** B

**H9-WL: Two treatments are always applied together. Flaw?**
- A. None
- B. Cannot separate effects
- C. Too many replicates
- D. Weak randomisation
**Correct answer:** B

### 2.4 – Replication & Randomisation

**E10-KN: True replication uses:**
- A. Same sample repeatedly
- B. Technical replicates
- C. Independent units
- D. Model residuals
**Correct answer:** C

**H10-WL: Control and treatment plants are placed on different shelves. Issue?**
- A. Small sample size
- B. Confounding with shelf
- C. Wrong species
- D. Too many factors
**Correct answer:** B

### 2.5 – Sample Size & Power

**E11-KN: Power increases with:**
- A. Higher noise
- B. Larger sample size
- C. Incorrect test
- D. Missing data
**Correct answer:** B

**H11-HC: An underpowered clinical trial risks:**
- A. Detecting small effects well
- B. Failing to detect real effects
- C. Eliminating bias
- D. Avoiding assumptions
**Correct answer:** B

### 2.6 – Controls & Baselines

**E12-KN: A negative control should:**
- A. Show strong effect
- B. Show no response
- C. Match the positive control
- D. Be avoided
**Correct answer:** B

**H12-GEN: An RNA-seq experiment lacks an unstimulated baseline. Issue?**
- A. None
- B. Cannot interpret treatment effects
- C. Faster analysis
- D. Lower variance
**Correct answer:** B

### 2.7 – Blocking & Stratification

**E13-KN: Blocking reduces:**
- A. Random variation
- B. Unwanted nuisance variation
- C. Treatment effects
- D. Replication
**Correct answer:** B

**H13-WL: Greenhouse blocks differ in light intensity. Best solution?**
- A. Ignore it
- B. Block by location
- C. Reduce sample size
- D. Randomise without blocks
**Correct answer:** B

## 3. Replication & Diagnostics

### 3.1 – Pseudoreplication

**E14-KN: True replication involves:**
- A. Repeating same sample
- B. Technical duplicates
- C. Independent biological units
- D. Re-analysing data
**Correct answer:** C

**H14-GEN: Sequencing lanes treated as biological samples. Issue?**
- A. None
- B. Technical ≠ biological replicates
- C. Too many reads
- D. Wrong aligner
**Correct answer:** B

### 3.2 – Linking Design to Analysis

**E15-KN: Repeated measures require:**
- A. Independent tests
- B. Model with subject effect
- C. Ignoring correlation
- D. ANOVA only
**Correct answer:** B

**H15-WL: Plants measured weekly for 10 weeks. Best analysis?**
- A. Week-by-week t-tests
- B. Mixed model
- C. Only final week
- D. Correlation
**Correct answer:** B

### 3.3 – Documentation & Reproducibility

**E16-KN: Reproducibility is improved by:**
- A. Random scripts
- B. Version control
- C. Memory
- D. Private folders
**Correct answer:** B

**H16-GEN: Pipeline cannot be reproduced. Fix?**
- A. Ignore
- B. Record software versions
- C. Remove code
- D. Use screenshots
**Correct answer:** B

### 3.4 – Ethics & Practicality

**E17-KN: Ethical design balances:**
- A. Minimal power
- B. Unlimited animals
- C. Scientific value and ethical constraints
- D. No control groups
**Correct answer:** C

**H17-WL: Power needs 24 animals but only 16 are allowed. Best option?**
- A. Break limits
- B. Proceed with caution and justify limitations
- C. Increase α
- D. Remove controls
**Correct answer:** B

### 3.5 – Interpretation of Statistics

**E18-KN: A p-value is:**
- A. Pr(null true)
- B. Pr(data|null)
- C. Effect size
- D. Sample variance
**Correct answer:** B

**H18-HC: A confidence interval crosses zero. Meaning?**
- A. Strong effect
- B. Direction uncertain
- C. No variance
- D. Low noise
**Correct answer:** B

### 3.6 – Confounding Variables

**E19-KN: A confounder:**
- A. Has no effect
- B. Varies with treatment
- C. Irrelevant
- D. Must be categorical
**Correct answer:** B

**H19-HC: Age differs between clinical study groups. Issue?**
- A. None
- B. Age confounds results
- C. Fix via SE bars
- D. Drop older group
**Correct answer:** B

### 3.7 – Assumption Checking

**E20-KN: Normality assumption applies to:**
- A. Predictors
- B. Residuals
- C. Response
- D. Factors
**Correct answer:** B

**H20-GEN: RNA-seq mean–variance issue. Fix?**
- A. Average counts
- B. Use negative binomial model
- C. Drop high counts
- D. Ignore
**Correct answer:** B

## 4. Effect Sizes, Data, Interpretation

### 4.1 – Effect Sizes

**E21-KN: Effect size reflects:**
- A. p-value
- B. Magnitude of effect
- C. Variance only
- D. Sample size
**Correct answer:** B

**H21-GEN: Small log2FC but low FDR implies:**
- A. Strong effect
- B. Small but detectable change
- C. Noise
- D. Batch issue
**Correct answer:** B

### 4.2 – Descriptive Statistics

**E22-KN: SD measures:**
- A. Precision
- B. Sample variability
- C. Measurement error
- D. Effect size
**Correct answer:** B

**H22-HC: Tiny SE bars with n=400 imply:**
- A. Low variability
- B. Precise estimate of mean
- C. Poor design
- D. Skewed data
**Correct answer:** B

### 4.3 – Statistical Thinking

**E23-KN: Statistical thinking includes:**
- A. Focus on p-values
- B. Consider uncertainty
- C. Avoid EDA
- D. Use default tests
**Correct answer:** B

**H23-WL: Large n yields trivial difference with p<0.001. Why?**
- A. Strong effect
- B. Trivial effect detectable due to large n
- C. Wrong test
- D. No confounding
**Correct answer:** B

### 4.4 – Missing Data

**E24-KN: MNAR means:**
- A. Missing unrelated
- B. Missing depends on unobserved values
- C. Always ignorable
- D. Only in surveys
**Correct answer:** B

**H24-HC: Dropout rates correlate with disease severity. Issue?**
- A. None
- B. Biased missingness mechanism
- C. Delete cases
- D. Replace with zeros
**Correct answer:** B

## 5. Modelling & Hypothesis Testing

### 5.1 – Statistical Modelling

**E25-KN: A model describes:**
- A. Causation
- B. Response variation
- C. Raw data
- D. Sample prep
**Correct answer:** B

**H25-WL: Residual curvature in model fit. Fix?**
- A. Ignore
- B. Transform or adjust model
- C. Delete points
- D. Use chi-square
**Correct answer:** B

### 5.2 – Mixed Models

**E26-KN: Mixed models are useful for:**
- A. Independent data
- B. Hierarchical data
- C. Only small samples
- D. Only genomics
**Correct answer:** B

**H26-HC: Repeated measures best analysed using:**
- A. ANOVA
- B. Mixed model with subject random effect
- C. Separate regressions
- D. Chi-square
**Correct answer:** B

### 5.3 – Computational Tools

**E27-KN: Good computational practice:**
- A. Screenshots
- B. Scripted workflows
- C. Memory
- D. Private folders
**Correct answer:** B

**H27-GEN: DESeq2 design missing batch term. Issue?**
- A. Fine
- B. Must include batch
- C. Remove batch samples
- D. Ignore PCA
**Correct answer:** B

### 5.4 – Exploratory Data Analysis

**E28-KN: EDA is used to:**
- A. Increase n
- B. Understand data
- C. Replace analysis
- D. Remove variance
**Correct answer:** B

**H28-GEN: PCA shows clear batch clusters. Next step?**
- A. Ignore
- B. Adjust for batch
- C. Remove batch
- D. Filter genes
**Correct answer:** B

### 5.5 – Hypothesis Testing

**E29-KN: A p-value is:**
- A. Pr(alternative true)
- B. Pr(data|null)
- C. Effect size
- D. CI
**Correct answer:** B

**H29-WL: Multiple testing yields many p<0.05. Meaning?**
- A. Strong evidence
- B. Need FDR correction
- C. Ignore
- D. Raise alpha
**Correct answer:** B
