# README
## 1 Abstract
Relationship between academic collaboration and research output has been topic of many research. 
Past studies regarded it as a regression problem and proved the positive correlation. In the study, we view it as a production function problem. We took two measures of structural hole as input variables, weighted publication counts as the single output variable. 
We applied both Data Envelopment Analysis (DEA) and Stochastic Frontier Analysis (SFA) to estimate the production function. Empirical numerical example of Operational Research field was included. 
During the analysis, we represented the positive correlation as well as revealed more characteristics of the production function by breakdown overall efficiency into technical efficiency and scale efficiency. 
Result of the empirical example suggest research institutes should develope more irreplaceable collaboration relationship to boost their researh achievement. 

## 2 Motivation
Extant literatures applied various regression method to estimate the relation between academic collaboration and research output. The former’s positive effect toward the latter has already been proven. (Chen et al., 2008; Cantner and Rake, 2014; Gonzalez-Brambila et al., 2015)  

However, regression method requires strong assumption on statistical distribution of the function, which is a potential concern for us. Hence, we want to apply Data Envelopment Analysis (DEA) to avoid the risk. 
By applying data envelopment analysis on academic soial network, we provide managerial insights based on analysis results. 

3 Contributions of this study:
* Constructed production function of research social network, which provides efficiency scores and managerial suggestion towards each institutes. 
* Applied data envelopment analysis on the scenario of research collaboration. This enables us to analyze efficiency without making strong assumption towards distribution of production function. 
* Focus on specific field to justify the relationship between collaboration and research accomplishment. 

## 3 Methodology
We apply Stochastic Frontier Analysis (SFA) and Data Envelopment Analysis (DEA) in our study. As for SFA, we use Cobb-Douglas Production Function, which can handle multiple inputs in its generalized form and handle different scales of production.

Below is the formulation of **Cobb-Douglas Production Function**:

* Let Y be the total production
* Let A be the total factor productivity
* Let L be the first input resource
* Let K be the second input resource
* Let $\alpha$ and $\beta$ be the output elasticities of L and K, respectively

<p align="center">
$Y = AL^{\alpha}K^{\beta}$
</p>

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

## 4 Data Collection & Analysis
### 4.1 Data Collection
We take European Journal of Operational Research as our target publication to analysis the academic collaboration’s effect toward research output. We use crawler to collect papers basic information from Volumes 256 to 295, 120 issues in total. There are 4,786 rows and four columns in data, including paper title, author's name, author's affiliation and author sequence.

Then, data are transform into network. First, we align the granularity of each affiliations into the university. Second, delete nodes with zero degree centrality, which means delete the universities which did not collaborate with others in our data. The network is visualized in the following link. https://network-visualization.vercel.app/
<!-- Add some description. ex. who is the centrality, where is NTU, Georgia Tech -->

After that, we can compute inputs and outputs for the production function. We pick two kinds of structural hole as our inputs: effective size and local constraint. As for outputs, we have publications number and weighted publications. Each paper counts for one in the calculation of publications number. While to calculate weighted publications, the weight of first author's institution may be twice the weight of the other authors', and sum of weights for all the authors of a same paper should equal to one.

### 4.2 Analysis
Below are the scatter plots of the structure hole effective size, structure hole local constraint (input) and the weighted publication (output).

<img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/scatter%201.jpg" width="300" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/scatter%202.jpg" width="300" /> <br>

Below are the results of the SFA model, which are the technical efficiency of each institute and the frontier. <br>

<img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/sfa.jpg" width="300" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/sfa%20frontier.jpg" width="300" /> <br>

Below are the results of the DEA model, which are the overall efficiency, technical efficiency, scale efficiency of each institute. <br>

<img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/dea%201.jpg" width="300" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/dea%202.jpg" width="300" /> <img src="https://github.com/PJL-Emily/Data-Envelopment-Analysis-for-Academic-Social-Network-Analysis/blob/master/img/dea%203.jpg" width="300" />

## 5 Results & Conclusion
In Fig.XXX, institutions are classified into four quadrants. Institutions in quadrant one have both nice overall efficiency and technical efficiency. Especially The University of Queensland, Friedrich Schiller University Jena, and University of Seville, their overall efficiency is equal to one. For institutions lie in quadrant two, they have low technical efficiency but high scale efficiency, so they should focus on technology improvement. As for the institutions belong to quadrant three, they have both low technical efficiency and scale efficiency, so their technology and inputs scale should both be improved. At last, the institutions in quadrant four have high technical efficicency but low scale efficiency, they should first focus on adjusting their inputs scale to attain the most productivitive scale size.
<!-- 放p20圖片 -->

Our school, National Taiwan University, has overall efficiency equals to 0.13, technical efficicency equals to 0.21, and scale efficiency equals to 0.62. It has low technical efficicency but high scale efficiency, which is belongs to quadrant two, so it should focus on improving technology first.


## 6. Reference

* https://js.cytoscape.org/
* https://networkx.org/documentation/stable/reference/algorithms/structuralholes.html
