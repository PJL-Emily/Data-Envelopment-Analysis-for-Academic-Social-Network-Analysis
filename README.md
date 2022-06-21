# 1. Abstract
# 2. Motivation
   including literature review.
# 3. Methodology
# 4. Data Collection & Analysis
We take European Journal of Operational Research as our target publication to analysis the academic collaboration’s effect toward research output. We use crawler to collect papers basic information from Volumes 256 to 295, 120 issues in total. There are 4,786 rows and four columns in data, including paper title, author's name, author's affiliation and author sequence.

Then, data are transform into network. First, we align the granularity of each affiliations into the university. Second, delete nodes with zero degree centrality, which means delete the universities which did not collaborate with others in our data. The network is visualized in the following link. https://network-visualization.vercel.app/
<!-- Add some description. ex. who is the centrality, where is NTU, Georgia Tech -->

After that, we can compute inputs and outputs for the production function. We pick two kinds of structural hole as our inputs: effective size and local constraint. As for outputs, we have publications number and weighted publications. Each paper counts for one in the calculation of publications number. While to calculate weighted publications, the weight of first author's institution may be twice the weight of the other authors', and sum of weights for all the authors of a same paper should equal to one.


# 5. Results & Conclusion
In Fig.XXX, institutions are classified into four quadrants. Institutions in quadrant one have both nice overall efficiency and technical efficiency. Especially The University of Queensland, Friedrich Schiller University Jena, and University of Seville, their overall efficiency is equal to one. For insttutions
<!-- 放p20圖片 -->

# 6. Reference