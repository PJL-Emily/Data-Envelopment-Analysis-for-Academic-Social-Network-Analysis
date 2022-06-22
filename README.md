# 1. Abstract
# 2. Motivation
   including literature review.
# 3. Methodology
We apply Stochastic Frontier Analysis (SFA) and Data Envelopment Analysis (DEA) in our study. As for SFA, we use Cobb-Douglas Production Function, which can handle multiple inputs in its generalized form and handle different scales of production.

Below is the formulation of **Cobb-Douglas Production Function**:

* Let Y be the total production
* Let A be the total factor productivity
* Let L be the first input resource
* Let K be the second input resource
* Let $\alpha$ and $\beta$ be the output elasticities of L and K, respectively

\begin{align*}
Y = AL^{\alpha}K^{\beta}
\end{align*}

As for DEA, we apply two different models, which are input-oriented CRS DEA model and input-oriented VRS DEA model. With these two models, we can calculate the overall efficiency, technical efficiency and scale efficiency of each institute.

Below is the formulation of **input-oriented CRS DEA model**:

* Let $K$ be the set of the DMUs
* Let $I$ be the set of the inputs
* Let $O$ be the set of the outputs
* Let $X_{ik}$ be the $i^{th}$ input resource of DMU $k$,$\quad k \in K, i \in I$
* Let $Y_{jk}$ be the $j^{th}$ production output of DMU $k$,$\quad k \in K, j \in O$
* Let $v_{i}$ be the weight for the $i^{th}$ input resource,$\quad i \in I$
* Let $u_{j}$ be the weight for the $j^{th}$ production output,$\quad j \in O$

\begin{align*}
\max \quad		 & \sum_{j \in J}u_{j} Y_{jk} \\
\text{s.t.} \quad & \sum_{i \in I}v_{i} X_{ik} = 1 \\
                 & \sum_{j \in J}u_{j} Y_{jn} - \sum_{i \in I}v_{i} X_{in} \leq 0, \quad \forall n \in K \\
                 & v_{i} \geq \epsilon, \quad \forall i \in I \\
                 & u_{j} \geq \epsilon, \quad \forall j \in J
\end{align*}

Below is the formulation of **input-oriented VRS DEA model**:

* Let $K$ be the set of the DMUs
* Let $I$ be the set of the inputs
* Let $O$ be the set of the outputs
* Let $X_{ik}$ be the $i^{th}$ input resource of DMU $k$,$\quad k \in K, i \in I$
* Let $Y_{jk}$ be the $j^{th}$ production output of DMU $k$,$\quad k \in K, j \in O$
* Let $v_{i}$ be the weight for the $i^{th}$ input resource,$\quad i \in I$
* Let $u_{j}$ be the weight for the $j^{th}$ production output,$\quad j \in O$
* Let $u_{0}$ be the x-axis intercept that allow the frontier may not pass throught the original point

\begin{align*}
\max \quad		 & \sum_{j \in J}u_{j} Y_{jk} - u_0 \\
\text{s.t.} \quad & \sum_{i \in I}v_{i} X_{ik} = 1 \\
                 & \sum_{j \in J}u_{j} Y_{jn} - \sum_{i \in I}v_{i} X_{in} - u_0 \leq 0, \quad \forall n \in K \\
                 & v_{i} \geq \epsilon, \quad \forall i \in I \\
                 & u_{j} \geq \epsilon, \quad \forall j \in J
\end{align*}

# 4. Data Collection & Analysis
We take European Journal of Operational Research as our target publication to analysis the academic collaboration’s effect toward research output. We use crawler to collect papers basic information from Volumes 256 to 295, 120 issues in total. There are 4,786 rows and four columns in data, including paper title, author's name, author's affiliation and author sequence.

Then, data are transform into network. First, we align the granularity of each affiliations into the university. Second, delete nodes with zero degree centrality, which means delete the universities which did not collaborate with others in our data. The network is visualized in the following link. https://network-visualization.vercel.app/
<!-- Add some description. ex. who is the centrality, where is NTU, Georgia Tech -->

After that, we can compute inputs and outputs for the production function. We pick two kinds of structural hole as our inputs: effective size and local constraint. As for outputs, we have publications number and weighted publications. Each paper counts for one in the calculation of publications number. While to calculate weighted publications, the weight of first author's institution may be twice the weight of the other authors', and sum of weights for all the authors of a same paper should equal to one.


# 5. Results & Conclusion
In Fig.XXX, institutions are classified into four quadrants. Institutions in quadrant one have both nice overall efficiency and technical efficiency. Especially The University of Queensland, Friedrich Schiller University Jena, and University of Seville, their overall efficiency is equal to one. For insttutions
<!-- 放p20圖片 -->

# 6. Reference